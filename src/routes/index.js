import { Router } from 'express';

import * as homeController from '@/controllers/home';
import * as taskController from '@/controllers/tasks';

const router = Router();

router.get('/', homeController.index);

router.get('/health', homeController.healthCheck);

router.get('/tasks', taskController.getTasks);
router.post('/tasks', taskController.createTask);
router.put('/tasks/:id', taskController.updateTask);
router.delete('/tasks/:id', taskController.deleteTask);
router.patch('/tasks/:id/complete', taskController.completeTask);

export default router;
