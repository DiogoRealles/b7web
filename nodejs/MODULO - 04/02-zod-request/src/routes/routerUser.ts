import express from 'express';
import { usersSchema } from '../schemas/schemaUsers';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'USERS' });
});

router.post('/add', (req, res) => {
  const usersResult = usersSchema.safeParse(req.body);

  if (!usersResult.success) {
    console.log('Verifique os dados e tente novamnete!');

    return res
      .status(422)
      .json({ error: 'Verifique os dados e tente novamnete!' });
  }

  const { name, email, age } = usersResult.data;

  console.log(name, email, age);

  res.status(200).json({ message: 'Cadastrado com sucesso!' });
});

export default router;
