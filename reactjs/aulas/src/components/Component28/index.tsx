import { Providers } from '@/utils/providers';
import PostsList from './PostsList';

const Index = () => {
  return (
    <Providers>
      <div className="container mx-auto">
        <h1>Component 31</h1>
        <p>React Query / TanStack Query</p>

        <div className="w-full h-scree flex flex-col justify-center items-center text-white">
          <PostsList />
        </div>
      </div>
    </Providers>
  );
};

export default Index;
