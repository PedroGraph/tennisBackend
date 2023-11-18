
import Tournament from '../models/tournaments.js';

export const createTournament = async (req, res) => {
  const { name, location, startDate, endDate, players } = req.body;

  try {
    const newTournament = new Tournament({ name, location, startDate, endDate, players });
    await newTournament.save();
    res.status(201).json(newTournament);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTournaments = async (req, res) => {
  try {
    const tournaments = await Tournament.find();
    res.json(tournaments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateTournament = async (req, res) => {
  const { id } = req.params;
  const { name, location, startDate, endDate, players } = req.body;

  try {
    const updatedTournament = await Tournament.findByIdAndUpdate(
      id,
      { name, location, startDate, endDate, players },
      { new: true }
    );

    if (!updatedTournament) {
      return res.status(404).json({ message: 'Torneo no encontrado' });
    }

    res.json(updatedTournament);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTournament = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTournament = await Tournament.findByIdAndDelete(id);

    if (!deletedTournament) {
      return res.status(404).json({ message: 'Torneo no encontrado' });
    }

    res.json({ message: 'Torneo eliminado con éxito' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getTournamentById = async (req, res) => {
  const { id } = req.params;

  try {
    const tournament = await Tournament.findById(id);
    
    if (!tournament) {
      return res.status(404).json({ message: 'Torneo no encontrado' });
    }

    res.json(tournament);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
