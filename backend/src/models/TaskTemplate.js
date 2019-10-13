const mongoose = require('mongoose');

const TaskTemplateSchema = new mongoose.Schema({
    name: String,
    description: String,
    imagePath: String,
    createTime: String,
    createUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('TaskTemplate', TaskTemplateSchema);
