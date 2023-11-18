// adminRoutes.js
import express from 'express';
import { getUsers, updateUser, getUserById } from '../controllers/adminControllers.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();
router.get('/users', requireAuth, getUsers);
router.get('/users/:id', requireAuth, getUserById);
router.patch('/users/:id', requireAuth, updateUser);

export default router;
