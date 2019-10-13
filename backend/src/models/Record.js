const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
    tasks: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    },
    startTime: String,
    endTime: String,
    elapsedTime: String,
    createTime: String,
    createUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Record', RecordSchema);
