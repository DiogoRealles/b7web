import express from 'express';
import routerFlights from './flights';
import routerProducts from './products';
import routerPing from './ping';
import middlewareRouter from './middleware';
import { interferir } from '../middlewares/interferir';
import routerDataParams from './data_params';

const router = express.Router();

// router.use(interferir);
router.use('/flights', routerFlights);
router.use('/products', routerProducts);
router.use('/middleware', middlewareRouter);
router.use('/ping', routerPing);
router.use('/data-params', routerDataParams);

export default router;
