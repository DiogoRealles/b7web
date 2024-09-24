import { TMenuOptions } from '../types/TMenuOptions';

export const createMenuObject = (activeMenu: TMenuOptions) => {
  let returnObject = {
    all: false,
    cat: false,
    dog: false,
    fish: false,
  };

  if (activeMenu !== '') {
    returnObject[activeMenu] = true;
  }

  return returnObject;
};
