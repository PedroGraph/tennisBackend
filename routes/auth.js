// authRoutes.js
import express from 'express';
import { register, login } from '../controllers/authControllers.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/register', register);
router.post('/login', requireAuth, login);

export default router;
