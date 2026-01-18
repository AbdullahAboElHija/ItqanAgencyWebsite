const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const messageRoutes = require('./routes/messageRoutes');
const chatRoutes = require('./routes/chatRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Routes
app.get('/', (req, res) => {
    res.send('API is running...');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/projects', projectRoutes);
app.use('/api/v1/messages', messageRoutes);
app.use('/api/v1/chat', chatRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
