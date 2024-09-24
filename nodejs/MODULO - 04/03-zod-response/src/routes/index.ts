import express from 'express';
import routerPosts from './routerPosts';

const router = express.Router();

router.use('/posts', routerPosts);

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
});

export default router;
