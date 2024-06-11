'use client';

import Header from './Header/';
import PostList from './PostList/';
import Footer from './Footer/';
import { ContextPostProvider } from '@/contexts/ContextPost';

const Index = () => {
  return (
    <ContextPostProvider>
      <section className="">
        <header className="text-center py-10">
          <h1 className="text-4xl mb-5">Component 19</h1>
          <p>
            Exercicio de Context com POST. <br />
          </p>
        </header>

        <div className="grid place-content-center h-screen">
          <Header />

          <PostList />

          <Footer />
        </div>
      </section>
    </ContextPostProvider>
  );
};

export default Index;
