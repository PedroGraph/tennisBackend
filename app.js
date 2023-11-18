// app.js
import express from 'express';
import authRoutes from './routes/auth.js'; 
import mongoose from './database/db.js';
import adminRoutes from './routes/admin.js';
import tournament from './routes/tournaments.js';
import payment from './routes/payments.js';
import cors from 'cors';
import * as dotenv from 'dotenv';

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

app.use('/auth', authRoutes);
app.use('/admin', adminRoutes);
app.use('/tennis', tournament);
app.use('/payment', payment);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
