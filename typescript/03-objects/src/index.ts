// TYPE OBJECT
type Torder = {
  name: string;
  number_order: number;
};

const greeting = (order: Torder): string => {
  return `Client: ${order.name}, Order:${order.number_order}`;
};

const diogo: Torder = {
  name: 'Diogo',
  number_order: 35,
};

// console.log(greeting(diogo));

// OPTIONAL PROPS
type TCar = {
  whells: number;
  airbag?: string;
};

const detailsCar = (car1: TCar) => {
  if (car1.airbag === undefined) {
    return 'Car without airbag';
  }
};

const car1: TCar = {
  whells: 4,
};

console.log(detailsCar(car1));
