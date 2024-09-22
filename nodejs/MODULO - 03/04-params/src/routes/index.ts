import express from 'express';
import routerProducts from './products';

const router = express.Router();

router.use('/products', routerProducts);

router.get('/', (req, res) => {
  res.json({ message: 'HOME! Faça login para acessar o sistema!' });
});

export default router;
