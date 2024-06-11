import { getPosts } from '@/utils/apis';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export const usePosts = (limit: number, start: number, enabled?: boolean) => {
  const query = useQuery({
    queryKey: ['posts', { limit, start }],
    queryFn: () => getPosts(limit, start),
    placeholderData: keepPreviousData,
    staleTime: 6 * (60 * 1000),
    enabled,
  });
  return query;
};
