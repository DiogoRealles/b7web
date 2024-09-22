import { RequestHandler } from 'express';

const logged = true;

export const auth: RequestHandler = (req, res, next) => {
  if (logged) {
    console.log('LOGADO!');

    next();
  } else {
    res.status(422).json({ message: 'Faça login para continuar!' });
  }
};
