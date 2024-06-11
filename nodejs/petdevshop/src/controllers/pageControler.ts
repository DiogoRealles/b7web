import { Request, Response } from 'express';
import { createMenuObject } from '../helpers/createMenuObjects';
import { Pet } from '../models/pet';

export const page = (req: Request, res: Response) => {
  const list = Pet.getAll();

  const banner = {
    title: 'Todos os animais',
    background: 'allanimals.jpg',
  };
  res.render('pages/page', { menu: createMenuObject('all'), banner, list });
};

export const dogs = (req: Request, res: Response) => {
  const list = Pet.getFromType('dog');

  const banner = {
    title: 'Cachorros',
    background: 'banner_dog.jpg',
  };
  res.render('pages/page', { menu: createMenuObject('dog'), banner, list });
};

export const cats = (req: Request, res: Response) => {
  const list = Pet.getFromType('cat');
  const banner = {
    title: 'Gatos',
    background: 'banner_cat.jpg',
  };
  res.render('pages/page', { menu: createMenuObject('cat'), banner, list });
};

export const fishes = (req: Request, res: Response) => {
  const list = Pet.getFromType('fish');

  const banner = {
    title: 'Peixes',
    background: 'banner_fish.jpg',
  };
  res.render('pages/page', { menu: createMenuObject('fish'), banner, list });
};
