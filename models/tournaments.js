import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  victories: { type: Number, default: 0 },
  photoUrl: { type: String },
});

const tournamentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  players: [playerSchema], // Array de jugadores asociados al torneo
});

const Tournament = mongoose.model('Tournament', tournamentSchema);

export default Tournament;
