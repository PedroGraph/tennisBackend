import stripe from '../utils/stripe.js';
import { logEvent } from '../utils/logger.js';

export const processPayment = async (req, res) => {
  const { amount, currency, payment_method, description } = req.body;
  try {

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method,
      description,
      confirm: true,
    });

    // Registra el evento de pago
    // await logEvent('Payment', 'User', req.user._id);

    res.json({ paymentIntent });
  } catch (error) {
    console.error('Error al procesar el pago:', error);
    res.status(500).json({ error: error.message });
  }
};

export const getPricing = async (req, res) => {
  try {
    const pricing = await stripe.prices.list();
    res.json(pricing);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
