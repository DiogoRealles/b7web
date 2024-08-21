import express from 'express';
import { createContact, deleteContact, getContacts } from '../service/contact';

const router = express.Router();

router.post('/contacts', async (req, res) => {
  const { name } = req.body;

  if (!name || name.length < 2) {
    return res.json({ error: 'Nome precisa ter pelo menos 2 caracteres!' });
  }
  await createContact(name);

  res.status(201).json({ contact: name });
});

router.get('/contacts', async (req, res) => {
  let list = await getContacts();

  res.status(200).json({ contact: list });
});

router.delete('/contact', async (req, res) => {
  const { name } = req.query;

  if (!name) {
    return res.status(404).json({ error: 'Informe um nome para excluir!' });
  }

  await deleteContact(name as string);

  res.json({ contact: name });
});

export default router;
