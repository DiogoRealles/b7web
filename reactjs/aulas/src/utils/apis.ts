import { Post } from '@/types/Post';
import { User } from '@/types/UserFetch';
import { api } from './api';

export const getPosts = async (
  limit: number,
  start: number
): Promise<Post[]> => {
  const res = await api.get(`/posts?_limit=${limit}&_start=${start}`);
  return res.data;
};

export const getPost = async (id: number): Promise<Post> => {
  const res = await api.get(`/posts/${id}`);
  return res.data;
};

export const getUsers = async (): Promise<User[]> => {
  const res = await api.get('/users');
  return res.data;
};
