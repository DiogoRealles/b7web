import { NextApiHandler } from 'next';
import { Users } from '@/utils/users';

const handlerGet: NextApiHandler = async (req, res) => {
  const { name, age } = req.query;

  console.log('Name: ', name);
  console.log('Age: ', age);
  res.status(200).json(Users);
};

const handlerPost: NextApiHandler = async (req, res) => {
  const { name, age } = req.body;

  console.log('Name: ', name);
  console.log('Age: ', age);

  res.status(201).json({ status: true, user: { name, age } });
};

const handler: NextApiHandler = async (req, res) => {
  switch (req.method) {
    case 'GET':
      handlerGet(req, res);
      break;
    case 'POST':
      handlerPost(req, res);
      break;

    default:
      break;
  }
};

export default handler;
