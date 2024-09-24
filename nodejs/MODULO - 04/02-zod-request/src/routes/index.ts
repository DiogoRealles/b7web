import express from 'express';
import routerUser from './routerUser';

const router = express.Router();

router.use('/users', routerUser);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World - ZOD + Express!' });
});

export default router;
