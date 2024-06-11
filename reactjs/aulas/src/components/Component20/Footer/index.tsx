import { usePosts } from '@/contexts/ContextPost';

const Index = () => {
  const postCtx = usePosts();

  return (
    <footer>
      <div className="container mx-auto">
        <p>Total de posts: {postCtx?.posts.length}</p>
      </div>
    </footer>
  );
};

export default Index;
