import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  fooBar();
  res.json({ pong: true });
});

export default router;
