import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const products = [
    {
      id: 1,
      product: 'Notebook',
      price: 3210,
    },
    {
      id: 2,
      product: 'Smartphone',
      price: 1999,
    },
    {
      id: 3,
      product: 'Tablet',
      price: 199,
    },
  ];
  res.json({ products: products });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({ product: id });
});

export default router;
