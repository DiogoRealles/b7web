import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Notebook',
      price: 2999,
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 1999,
    },
    {
      id: 3,
      name: 'Tablet',
      price: 999,
    },
  ];

  res.json({ products });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({ id, name: 'Notebook', price: 2999 });
});

export default router;
