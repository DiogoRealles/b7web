'use client';

import Header from './Header/';
import PostList from './PostList/';
import Footer from './Footer/';
import { ContextPostProvider } from '@/contexts/ContextPost';

const Index = () => {
  return (
    <ContextPostProvider>
      <div className="container mx-auto">
        <h1>Component 20</h1>
        <p>
          Exercicio de Context com Reducer. <br />
        </p>
        <div className="grid place-content-center h-screen">
          <Header />
          <PostList />
          <Footer />
        </div>
      </div>
    </ContextPostProvider>
  );
};

export default Index;
