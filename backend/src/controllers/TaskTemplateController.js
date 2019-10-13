const TaskTemplate = require('../models/TaskTemplate');
const moment = require('moment');

module.exports = {
    async index(req, res) {
        const { task_template_id } = req.query;

        const taskTemplate = await TaskTemplate.find();

        return res.json(taskTemplate);
    },

    async store(req, res) {
        const { filename } = req.file;
        const { name, description } = req.body;
        const { create_user } = req.headers;

        let taskTemplate = await TaskTemplate.findOne({ name, description });
        if (!taskTemplate) {
            taskTemplate = await TaskTemplate.create({
                createUser: create_user,
                createTime: moment().format('DD/MM/YYYY HH:mm:ss.SSS'),
                imagePath: filename,
                name,
                description
            });
        }

        return res.json(taskTemplate);
    }
};
