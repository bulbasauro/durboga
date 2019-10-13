const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    createTime: String,
    createUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    taskTemplate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaskTemplate'
    },
    sequence: Number
});

module.exports = mongoose.model('Task', TaskSchema);
