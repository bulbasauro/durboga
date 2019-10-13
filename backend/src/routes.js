const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const TaskTemplateController = require('./controllers/TaskTemplateController');
const TaskController = require('./controllers/TaskController');
const RoutineController = require('./controllers/RoutineController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.get('/task_templates', TaskTemplateController.index);
routes.post('/task_templates', upload.single('image_path'), TaskTemplateController.store);

routes.get('/routines', RoutineController.index);
routes.post('/routines', RoutineController.store);

routes.post('/tasks', TaskController.store);

module.exports = routes;
