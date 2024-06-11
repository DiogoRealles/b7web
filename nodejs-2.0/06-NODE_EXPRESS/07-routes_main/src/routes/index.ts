import express from 'express';
import routerFlights from './flights';
import routerProducts from './products';
import routerPing from './ping';

const router = express.Router();

router.use('/flights', routerFlights);
router.use('/products', routerProducts);
router.use('/ping', routerPing);

export default router;
