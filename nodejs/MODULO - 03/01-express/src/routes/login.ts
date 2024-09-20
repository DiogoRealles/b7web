import express, { RequestHandler } from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({ mesage: 'Bem vindo!' });
});

export default router;
