import { Request, Response } from 'express';

import { Post } from '../models/House';

export const home = (req: Request, res: Response) => {
  // 01 - SUBMIT DATA TO FRONT
  type House = {
    img_url: string;
    title: string;
    category: string;
    rooms: number;
    garage: number;
    mts: number;
  };

  const house01: House = {
    img_url:
      'https://i.pinimg.com/736x/17/3c/c5/173cc5a9ab8d56e97415ae08a42b463f.jpg',
    title: 'House 01',
    category: 'House',
    rooms: 3,
    garage: 1,
    mts: 45,
  };

  // 02 - RENDER CONDITIONAL IF
  const auth = true;

  // 03 - RENDER CONDITIONAL IF - ELSE IF
  const age: number = 15;
  let showOld: boolean = false;

  if (age > 18) {
    showOld = true;
  }

  // 03.2 - RENDER CONDITIONAL IF - ELSE IF
  const approved = false;

  // 04 - RENDER LIST
  const items = ['Item 1', 'Item 2', 'Item 3'];

  // 05 - RENDER LIST OBJ
  const list = Post.getAll();
  const expansiveList = Post.getFromPriceAfter(250000);

  // const posts = [
  //   {
  //     img_url:
  //       'https://edmundoimoveis.com.br/blog/wp-content/uploads/2021/07/37.jpg',
  //     title: 'House 01',
  //     category: 'House',
  //     body: 'Casa espaçosa, bem decorada, cozinha...',
  //     comments: 1,
  //   },
  //   {
  //     img_url: 'https://i.ytimg.com/vi/v1Cp03QAoNU/maxresdefault.jpg',
  //     title: 'Apartament 02',
  //     category: 'Apartaments',
  //     body: 'Apartamento amplo e bem localizado...',
  //     comments: 3,
  //   },
  //   {
  //     img_url:
  //       'https://betaimages.lopes.com.br/realestate/sml/REO753046/53620263D2ACA218B18FAF25242F8AAB.JPEG',
  //     title: 'House 03',
  //     category: 'Houses',
  //     body: 'Casa com 3 Quartos e 3 banheiros...',
  //     comments: 5,
  //   },
  // ];

  res.render('pages/home', {
    house01,
    auth,
    approved,
    showOld,
    items,
    expansive: expansiveList,
    posts: list,
  });
};
