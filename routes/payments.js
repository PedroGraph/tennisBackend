
import express from 'express';
import { processPayment, getPricing } from '../controllers/paymentControllers.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();
router.post('/finish-payment', processPayment);
router.get('/get-pricing', getPricing);

export default router;
