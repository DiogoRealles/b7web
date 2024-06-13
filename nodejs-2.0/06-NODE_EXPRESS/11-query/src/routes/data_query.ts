import express from 'express';

const router = express.Router();

// QUERY
router.get('/', (req, res) => {
  const { name } = req.query;

  console.log('QUERY:', req.query);
  console.log(name);

  res.json({ name });
});

export default router;
