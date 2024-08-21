import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('Executou');
  res.json({ pong: true });
});

export default router;
