require('dotenv').config();
const connectDB = require('./src/config/db');
const app = require('./src/app');

console.log('Starting server...');

const startServer = async () => {
    try {
        await connectDB();

        const PORT = process.env.PORT || 5000;

        app.listen(PORT, () => {
            console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to connect to DB:', err);
        process.exit(1);
    }
};

startServer();
