import express from 'express';
import * as studentController from './controller.js';

const router = express.Router();

// Define routes with corresponding controller functions
router.post('/save-student', studentController.saveStudent);
router.post('/update', studentController.updateStudent);
router.post('/remove-user', studentController.removeStudent);
router.post('/remove-all-user', studentController.removeAll);
router.get('/user', studentController.getStudent);
router.get('/members', studentController.getAll);

export default router;
