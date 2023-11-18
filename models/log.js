
import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  action: { type: String, required: true },
  entity: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
  timestamp: { type: Date, default: Date.now }
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
