import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const { name } = req.body;

  console.log(`Produto: ${name}`);

  res.status(201).json({ product: name });
});

export default router;
