import { Post } from '@/types/Post';

type addAction = {
  type: 'add';
  payload: {
    title: string;
    body: string;
  };
};

type removeAction = {
  type: 'remove';
  payload: {
    id: number;
  };
};

export type PostActions = addAction | removeAction;

export const postReducer = (posts: Post[], action: PostActions) => {
  switch (action.type) {
    case 'add':
      return [
        ...posts,
        {
          id: posts.length,
          title: action.payload.title,
          body: action.payload.body,
        },
      ];

    case 'remove':
      return posts.filter((p) => p.id !== action.payload.id);

    default:
      return posts;
  }
};
