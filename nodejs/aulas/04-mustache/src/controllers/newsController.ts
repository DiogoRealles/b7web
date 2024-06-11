import { Request, Response } from 'express';

export const news = (req: Request, res: Response) => {
  const { slug } = req.params;

  res.send(`Page news: ${slug}`);
};
