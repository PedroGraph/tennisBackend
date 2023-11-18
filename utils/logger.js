import Event from '../models/log.js';

const logEvent = async (action, entity, userId) => {
  try {
    const newEvent = new Event({ action, entity, userId });
    await newEvent.save();
  } catch (error) {
    console.error('Error al registrar evento:', error);
  }
};

export { logEvent };
