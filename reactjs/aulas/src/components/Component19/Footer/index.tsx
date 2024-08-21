import { ContextPost } from '@/contexts/ContextPost';
import React, { useContext } from 'react';

const Index = () => {
  const postCtx = useContext(ContextPost);

  return (
    <footer>
      <div className="container mx-auto">
        <p>Total de posts: {postCtx?.posts.length}</p>
      </div>
    </footer>
  );
};

export default Index;
