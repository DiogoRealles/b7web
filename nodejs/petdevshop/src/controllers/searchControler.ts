import { Request, Response } from 'express';
import { Pet } from '../models/pet';
import { createMenuObject } from '../helpers/createMenuObjects';

export const search = (req: Request, res: Response) => {
  const query: string = req.query.q as string;

  if (!query) {
    res.redirect('/');
    return;
  }

  const list = Pet.getFromName(query);

  res.render('pages/page', { menu: createMenuObject(''), list, query });
};
