const Task = require('../models/Task');
const moment = require('moment');

module.exports = {
    async store(req, res) {
        const { task_template, sequence, create_user } = req.body;

        let task = await Task.findOne({ task_template, sequence });
        if (!task) {
            task = await Task.create({
                createUser: create_user,
                createTime: moment().format('DD/MM/YYYY HH:mm:ss.SSS'),
                taskTemplate: task_template,
                sequence
            });
        }

        return res.json(task);
    }
};
