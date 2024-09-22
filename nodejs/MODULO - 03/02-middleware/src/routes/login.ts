import express from 'express';
import { auth } from '../middleware/auth';

const router = express.Router();

router.get('/', auth, (req, res) => {
  res.json({ message: 'Bem vindo!' });
});

export default router;
