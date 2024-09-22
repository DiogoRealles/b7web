import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const { category } = req.query;

  console.log(category);

  res.json({ category: category });
});

export default router;
