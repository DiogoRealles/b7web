import { RequestHandler } from 'express';
const logged = false;

export const auth: RequestHandler = (req, res, next) => {
  if (logged) {
    console.log('Autorizado!');
    next();
  } else {
    res.status(403).json({ error: 'Faça o login para continuar!' });
  }
};
