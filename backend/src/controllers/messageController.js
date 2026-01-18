const asyncHandler = require('express-async-handler');
const Message = require('../models/Message');
const { sendLeadNotification } = require('../utils/emailService');
const { appendLeadToSheet } = require('../utils/sheetsService');

// @desc    Create new message (Contact Form)
// @route   POST /api/v1/messages
// @access  Public
const createMessage = asyncHandler(async (req, res) => {
    const { name, email, phone, service, content } = req.body;

    const message = await Message.create({
        name,
        email,
        phone,
        service,
        content
    });

    // Send notifications in the background
    // We don't await them to ensure the user gets a response quickly
    // but we log errors within the services
    sendLeadNotification({ name, email, phone, service, content });
    appendLeadToSheet({
        name,
        email,
        phone,
        service,
        content,
        createdAt: message.createdAt
    });

    res.status(201).json(message);
});

// @desc    Get all messages
// @route   GET /api/v1/messages
// @access  Private/Admin
const getMessages = asyncHandler(async (req, res) => {
    const messages = await Message.find({}).sort({ createdAt: -1 });
    res.json(messages);
});

// @desc    Update message status (e.g. Mark as read)
// @route   PATCH /api/v1/messages/:id/read
// @access  Private/Admin
const updateMessageToRead = asyncHandler(async (req, res) => {
    const message = await Message.findById(req.params.id);

    if (message) {
        message.isRead = true;
        const updatedMessage = await message.save();
        res.json(updatedMessage);
    } else {
        res.status(404);
        throw new Error('Message not found');
    }
});

module.exports = {
    createMessage,
    getMessages,
    updateMessageToRead
};
