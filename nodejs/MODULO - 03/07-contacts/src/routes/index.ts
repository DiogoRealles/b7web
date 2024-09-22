import express from 'express';
import {
  createContact,
  deleteContact,
  getContacts,
} from '../services/contacts';

const router = express.Router();

router.get('/contacts', async (req, res) => {
  let list = await getContacts();

  res.status(200).json({ contact: list });
});

router.post('/contact', async (req, res) => {
  const { name } = req.body;

  if (!name || name.length < 2) {
    return res
      .status(422)
      .json({ error: 'Nome precisa ter pelo menos 2 caracteres!' });
  }

  await createContact(name);

  res.status(201).json({ contact: name });
});

router.delete('/contact', async (req, res) => {
  const { name } = req.query;

  if (!name)
    res.status(422).json({ error: 'Precisa mandar um nome para excluir!' });

  await deleteContact(name as string);
  res.status(201).json({ message: `${name} removido com sucesso!` });
});

export default router;
