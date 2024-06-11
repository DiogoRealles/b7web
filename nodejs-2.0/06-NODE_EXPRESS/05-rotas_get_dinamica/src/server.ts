import express from 'express';
import helmet from 'helmet';
import path from 'path';

const server = express();

const PORT = process.env.PORT;

server.use(helmet());

server.use(express.json());

server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use(express.static(path.join(__dirname, '../public')));

server.get('/', (req, res) => {
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

server.get('/flight/:from/:to', (req, res) => {
  const { from, to } = req.params;

  res.json({
    flight: {
      from: from.toUpperCase(),
      to: to.toUpperCase(),
      price: 499,
    },
  });
});

server.listen(PORT, () => {
  console.log(`Server running at port: http://localhost:${PORT}`);
});
