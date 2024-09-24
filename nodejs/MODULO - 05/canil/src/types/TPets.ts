import { TPetType } from './TPetType';
import { TPetSex } from './TPetSex';

export type TPets = {
  type: TPetType;
  image: string;
  name: string;
  color: string;
  sex: TPetSex;
};
