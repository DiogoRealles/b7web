import express from 'express';
import helmet from 'helmet';
import path from 'path';
import routerFlights from './routes/flights';
import routerProducts from './routes/products';

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

server.use('/flights', routerFlights);
server.use('/products', routerProducts);

server.listen(PORT, () => {
  console.log(`Server running at port: http://localhost:${PORT}`);
});
