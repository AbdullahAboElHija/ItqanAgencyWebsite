const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./src/models/User');
const Project = require('./src/models/Project');
const connectDB = require('./src/config/db');

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await User.deleteMany();
        await Project.deleteMany();

        const createdUser = await User.create({
            username: 'admin',
            password: 'password123',
            role: 'admin'
        });

        console.log('Admin User Created');

        const projects = [
            {
                title: { en: "E-Commerce Platform", ar: "منصة تجارة إلكترونية", he: "פלטפורמת מסחר אלקטרוני" },
                description: {
                    en: "A full-featured online store with payment integration.",
                    ar: "متجر إلكتروني متكامل مع بوابة دفع.",
                    he: "חנות מקוונת עם אינטגרציית תשלומים."
                },
                category: "Web Development",
                images: ["https://placehold.co/600x400/059669/ffffff?text=E-Commerce"],
                liveUrl: "https://example.com",
                githubUrl: "https://github.com",
                isFeatured: true
            },
            {
                title: { en: "AI Chatbot", ar: "بوت محادثة ذكي", he: "צ'אטבוט חכם" },
                description: {
                    en: "Customer support bot using NLP.",
                    ar: "بوت دعم فني يستخدم معالجة اللغة الطبيعية.",
                    he: "בוט תמיכה בלקוחות המשתמש ב-NLP."
                },
                category: "AI Automation",
                images: ["https://placehold.co/600x400/1e293b/ffffff?text=AI+Bot"],
                liveUrl: "https://example.com",
                githubUrl: "https://github.com",
                isFeatured: true
            }
        ];

        await Project.insertMany(projects);
        console.log('Sample Projects Imported');

        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await User.deleteMany();
        await Project.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

if (process.argv[2] === '-d') {
    destroyData();
} else {
    importData();
}
