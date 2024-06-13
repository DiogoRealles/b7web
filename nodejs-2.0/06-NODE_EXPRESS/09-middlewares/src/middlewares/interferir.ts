import { RequestHandler } from 'express';

export const interferir: RequestHandler = (req, res, next) => {
  const logged = false;

  if (logged) {
    console.log('Logado');
    next();
  } else {
    console.log('Redirecionando para login...');
    res.status(403).json({ error: 'Redirecionando para login...' });
  }
};
