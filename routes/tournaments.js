
import express from 'express';
import {
  createTournament,
  getTournaments,
  updateTournament,
  deleteTournament,
  getTournamentById 
} from '../controllers/tournamentControllers.js';
import { requireAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/tournaments', createTournament);
router.get('/tournaments', getTournaments);
router.get('/tournaments/:id', getTournamentById);
router.put('/tournaments/:id', requireAuth, updateTournament);
router.delete('/tournaments/:id', requireAuth, deleteTournament);

export default router;
