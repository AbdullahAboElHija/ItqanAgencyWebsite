const asyncHandler = require('express-async-handler');
const Message = require('../models/Message');

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
