import { Request, Response } from 'express';

export const ageAction = (req: Request, res: Response) => {
  let showAge: boolean = false;
  let age: number = 0;

  if (req.body.year) {
    let year_birth: number = parseInt(req.body.year as string);
    let year_current: number = new Date().getFullYear();
    age = year_current - year_birth;

    showAge = true;
  }

  res.render('pages/age', { age, showAge });
};

export const ageForm = (req: Request, res: Response) => {
  res.render('pages/age');
};
