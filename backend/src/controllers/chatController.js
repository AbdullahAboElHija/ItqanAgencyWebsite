const OpenAI = require('openai');
const asyncHandler = require('express-async-handler');
const fs = require('fs');
const path = require('path');

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// @desc    Chat with AI Assistant
// @route   POST /api/chat
// @access  Public
const chatWithAI = asyncHandler(async (req, res) => {
    const { message, history } = req.body;

    if (!message) {
        res.status(400);
        throw new Error('Please provide a message');
    }

    // Read Knowledge Base from file
    let knowledgeBase = '';
    try {
        const mdPath = path.join(__dirname, '../../knowledge.md');
        const txtPath = path.join(__dirname, '../../knowledge.txt');

        if (fs.existsSync(mdPath)) {
            knowledgeBase = fs.readFileSync(mdPath, 'utf8');
        } else if (fs.existsSync(txtPath)) {
            knowledgeBase = fs.readFileSync(txtPath, 'utf8');
        } else {
            knowledgeBase = 'Itqan Agency is a software house founded by engineers.';
        }
    } catch (err) {
        console.error('Error reading knowledge files:', err);
        knowledgeBase = 'Itqan Agency is a software house.';
    }

    const systemPrompt = `
    You are "Itqan Bot", the AI Assistant for Itqan Agency.
    Tone: Professional, brief, and sales-oriented.
    
    Knowledge Base (Source of Truth):
    ---
    ${knowledgeBase}
    ---
    
    Goal: Answer questions briefly based on the knowledge base above. Always try to get the user to book a call or send an email. Do not give long generic answers.
    Language: Detect the user's language (Arabic, Hebrew, English) and reply in the same language. 
    If the user speaks Arabic, reply in Arabic. If Hebrew, reply in Hebrew. If English, reply in English.
  `;

    const messages = [
        { role: 'system', content: systemPrompt },
        ...(history || []).map((msg) => ({
            role: msg.role === 'user' ? 'user' : 'assistant',
            content: msg.content,
        })),
        { role: 'user', content: message },
    ];

    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages,
            max_tokens: 500,
            temperature: 0.7,
        });

        const reply = response.choices[0].message.content;
        res.json({ reply });
    } catch (error) {
        console.error('OpenAI API Error details:', error);
        res.status(500);
        throw new Error(`AI Service Error: ${error.message}`);
    }
});

module.exports = {
    chatWithAI,
};
