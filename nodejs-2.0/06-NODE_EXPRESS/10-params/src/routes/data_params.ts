import express from 'express';

const router = express.Router();

// PARAMS
router.get('/:id', (req, res) => {
  const { id } = req.params;

  console.log('PARAMS:', req.params);
  console.log(id);

  res.json({ id });
});

export default router;
