import { dataPets } from '../db/conn';
import { TPets } from '../types/TPets';
import { TPetType } from '../types/TPetType';

export const Pet = {
  getAll: (): TPets[] => {
    return dataPets;
  },

  getFromTypes: (type: TPetType): TPets[] => {
    return dataPets.filter((item) => item.type === type);
  },

  getFromName: (name: string): TPets[] => {
    return dataPets.filter(
      (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  },
};
