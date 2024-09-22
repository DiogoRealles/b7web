import express from 'express';
import routerLogin from './login';

const router = express.Router();

router.use('/login', routerLogin);

router.get('/', (req, res) => {
  res.json({ message: 'HOME! Faça login para acessar o sistema!' });
});

export default router;
