import express from 'express';

const router = express.Router();

router.get('/:id', (req, res) => {
  const { id } = req.params;

  console.log(id);

  res.json({ id: id });
});

export default router;
