import { Request, Response } from 'express';

export const signup = (req: Request, res: Response) => {
  const { name } = req.query;

  res.render('pages/signup', { name });
};
