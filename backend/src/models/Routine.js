const mongoose = require('mongoose');

const RoutineSchema = new mongoose.Schema({
    name: String,
    description: String,
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],
    createTime: String,
    createUser: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Routine', RoutineSchema);
