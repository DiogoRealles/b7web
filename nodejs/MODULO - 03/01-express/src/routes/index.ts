import express from 'express';
import routerFlights from './flights';
import routerPing from './ping';
import routerProducts from './products';

const router = express.Router();

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
