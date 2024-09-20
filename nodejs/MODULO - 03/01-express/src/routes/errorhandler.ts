import { ErrorRequestHandler, RequestHandler } from 'express';

export const notFoundRequest: RequestHandler = (req, res) => {
  res.status(404).json({ error: 'Route not found!' });
};

export const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.log(error);
  res.status(500).json({ error: 'Ocorreu um erro!' });
};
