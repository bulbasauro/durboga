const Routine = require('../models/Routine');
const moment = require('moment');

module.exports = {
    async index(req, res) {
        const { routine_id } = req.query;

        const routine = await Routine.findById(routine_id);
        await routine.populate('createUser').populate('tasks').execPopulate();
        for (const task of routine.tasks) {
            await task.populate('createUser').populate('taskTemplate').execPopulate();
        }

        return res.json(routine);
    },

    async store(req, res) {
        const { name, description, tasks } = req.body;
        const { create_user } = req.headers;
        
        const routine = await Routine.create({
            createUser: create_user,
            createTime: moment().format('DD/MM/YYYY HH:mm:ss.SSS'),
            name,
            description,
            tasks: tasks.split(',').map(task => task.trim())
        });

        return res.json(routine);
    }
};
