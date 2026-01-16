const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: {
        en: { type: String, required: true },
        ar: { type: String, required: true },
        he: { type: String, required: true }
    },
    description: {
        en: { type: String, required: true },
        ar: { type: String, required: true },
        he: { type: String, required: true }
    },
    category: {
        type: String,
        required: true
    },
    images: [{
        type: String
    }],
    liveUrl: {
        type: String
    },
    githubUrl: {
        type: String
    },
    isFeatured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
