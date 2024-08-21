import { PostActions, postReducer } from '@/reducers/postReduce';
import { Post } from '@/types/Post';
import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from 'react';

const STORAGE_KEY = 'postContextContent';

type ContextPostType = {
  posts: Post[];
  dispatch: Dispatch<PostActions>;
  // addPosts: (title: string, body: string) => void;
  // removePost: (id: number) => void;
};

export const ContextPost = createContext<ContextPostType | null>(null);

type Props = {
  children: ReactNode;
};

export const ContextPostProvider = ({ children }: Props) => {
  const [posts, dispatch] = useReducer(
    postReducer,
    JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  );

  // const addPosts = (title: string, body: string) => {
  //   dispatch({ type: 'add', payload: { title, body } });
  // };

  // const removePost = (id: number) => {
  //   dispatch({ type: 'remove', payload: { id } });
  // };

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  return (
    <ContextPost.Provider value={{ posts, dispatch /*addPosts, removePost*/ }}>
      {children}
    </ContextPost.Provider>
  );
};

export const usePosts = () => useContext(ContextPost);
