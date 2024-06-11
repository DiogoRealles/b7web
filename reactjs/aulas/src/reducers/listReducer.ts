import { ListItem } from '@/types/ListItem';

type AddAction = {
  type: 'ADD';
  payload: {
    label: string;
  };
};

type EditLabelAction = {
  type: 'EDITLABEL';
  payload: {
    id: number;
    newLabel: string;
  };
};

type ToggleCheckedAction = {
  type: 'TOGGLECHECKED';
  payload: {
    id: number;
  };
};

type RemoveAction = {
  type: 'REMOVE';
  payload: {
    id: number;
  };
};

type ListActions =
  | AddAction
  | EditLabelAction
  | ToggleCheckedAction
  | RemoveAction;

export const listReducer = (list: ListItem[], action: ListActions) => {
  switch (action.type) {
    case 'ADD':
      return [
        ...list,
        {
          id: list.length,
          label: action.payload.label,
          checked: false,
        },
      ];

    case 'EDITLABEL':
      return list.map((item) => {
        if (item.id === action.payload.id) {
          item.label = action.payload.newLabel;
        }

        return item;
      });

    case 'TOGGLECHECKED':
      return list.map((item) => {
        if (item.id === action.payload.id) {
          item.checked = !item.checked;
        }

        return item;
      });

    case 'REMOVE':
      return list.filter((item) => (item.id = action.payload.id));

    default:
      return list;
  }
};
