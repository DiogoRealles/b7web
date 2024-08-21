import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const flights = [
    {
      id: 1,
      name: 'POA',
      price: 2999,
    },
    {
      id: 2,
      name: 'GRU',
      price: 1999,
    },
    {
      id: 3,
      name: 'SFO',
      price: 999,
    },
  ];

  res.json({ flights });
});

router.get('/:from/:to', (req, res) => {
  const { from, to } = req.params;

  res.json({
    flight: {
      from: from.toUpperCase(),
      to: to.toUpperCase(),
      price: 499,
    },
  });
});

export default router;
