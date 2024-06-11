type Post = {
  img_url: string;
  title: string;
  category: string;
  body: string;
  comments: number;
  price: number;
};

const data: Post[] = [
  {
    img_url:
      'https://edmundoimoveis.com.br/blog/wp-content/uploads/2021/07/37.jpg',
    title: 'House 01',
    category: 'House',
    body: 'Casa espaçosa, bem decorada, cozinha...',
    comments: 1,
    price: 350000,
  },
  {
    img_url: 'https://i.ytimg.com/vi/v1Cp03QAoNU/maxresdefault.jpg',
    title: 'Apartament 02',
    category: 'Apartaments',
    body: 'Apartamento amplo e bem localizado...',
    comments: 3,
    price: 50000,
  },
  {
    img_url:
      'https://betaimages.lopes.com.br/realestate/sml/REO753046/53620263D2ACA218B18FAF25242F8AAB.JPEG',
    title: 'House 03',
    category: 'Houses',
    body: 'Casa com 3 Quartos e 3 banheiros...',
    comments: 5,
    price: 250000,
  },
];

export const Post = {
  getAll: (): Post[] => {
    return data;
  },
  getFromPriceAfter: (price: number): Post[] => {
    return data.filter((item) => item.price >= price);
  },
};
