import { getPost } from '@/utils/apis';
import { useQuery } from '@tanstack/react-query';

export const usePost = (id: number) =>
  useQuery({
    queryKey: ['posts', id],
    queryFn: () => getPost(id),
  });
