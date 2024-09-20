import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  // lorem(); // Gera um erro, que é capturado pelo errorHandler
  res.json({ pong: 'pong' });
});

export default router;
