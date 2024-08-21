import express from 'express';

const router = express.Router();

// BODY
router.post('/', (req, res) => {
  const { name } = req.body;

  console.log('BODY:', req.body);
  console.log(name);

  res.json({ name });
});

export default router;
