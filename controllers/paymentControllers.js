import stripe from '../utils/stripe.js';
import { logEvent } from '../utils/logger.js';

export const processPayment = async (req, res) => {
  const { priceId, successUrl, failUrl } = req.body;
  try {
    const paymentIntent =  await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
          {
              price: priceId,
              quantity: 1
          }
      ],
      success_url: successUrl,
      cancel_url: failUrl
    });
    res.json({ success: true, url: paymentIntent.url });

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
