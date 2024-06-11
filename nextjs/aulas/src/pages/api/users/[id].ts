import { NextApiHandler } from 'next';
import { Users } from '@/utils/users';

const handler: NextApiHandler = (req, res) => {
  const { id } = req.query;

  for (let i in Users) {
    if (Users[i].id.toString() === id) {
      res.json(Users[i]);
      return;
    }
  }

  res.status(200).json({ error: 'Usuário não encontrado!' });
};

export default handler;
