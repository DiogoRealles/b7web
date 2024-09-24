import { Request, Response } from 'express';

export const home = (req: Request, res: Response) => {
  res.send('HOME');
};

export const dogs = (req: Request, res: Response) => {
  res.send('DOGS');
};

export const cats = (req: Request, res: Response) => {
  res.send('CATS');
};

export const fishes = (req: Request, res: Response) => {
  res.send('FISHES');
};
