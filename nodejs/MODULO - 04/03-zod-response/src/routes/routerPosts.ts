import express from 'express';
import { schemaPosts } from '../schemas/schemaPosts';

const router = express.Router();

router.get('/', async (req, res) => {
  const jsonPlaceholderPosts = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );
  const data = await jsonPlaceholderPosts.json();

  const resultPosts = schemaPosts.safeParse(data);

  if (!resultPosts.success) {
    500;
    return res.status(500).json({ error: 'Erro ao buscar dados!' });
  }

  const totalPosts = resultPosts.data.length;

  console.log('Total:', totalPosts);

  res.status(200).json({ message: `Total: ${totalPosts}` });
});

export default router;
