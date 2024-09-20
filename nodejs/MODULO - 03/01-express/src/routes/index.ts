// 01 - express
import express from 'express';

// 02 - routes
import routerFlights from './flights';
import routerPing from './ping';
import routerProducts from './products';
import routerLogin from './login';

import { auth } from '../middlewares/auth';

const router = express.Router();

// 04 - middleware
router.use(auth);
router.use('/login', routerLogin);

// 02 - routes
router.use('/products', routerProducts);
router.use('/flights', routerFlights);
router.use('/ping', routerPing);
router.get('/', (req, res) => {
  const product: string = 'Headset',
    price: number = 199;

  const person = {
    name: 'Diogo',
    age: 35,
    hoobies: ['Animes', 'Movies', 'Music'],
  };

  res.json({
    message: 'Hello World - NodeJS & Server Express!',
    product,
    price,
    person,
  });
});

export default router;
