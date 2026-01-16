const express = require('express');
const router = express.Router();
const {
    createMessage,
    getMessages,
    updateMessageToRead
} = require('../controllers/messageController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .post(createMessage)
    .get(protect, admin, getMessages);

router.route('/:id/read')
    .patch(protect, admin, updateMessageToRead);

module.exports = router;
