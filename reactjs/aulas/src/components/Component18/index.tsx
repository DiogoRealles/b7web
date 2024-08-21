'use client';

import Header from './Header/';
import { UserProvider } from '@/contexts/ContextUser';

const Index = () => {
  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 18</h1>
        <p>Context</p>
      </header>

      <div className="grid place-content-center h-screen">
        <UserProvider>
          <Header />
        </UserProvider>
      </div>
    </section>
  );
};

export default Index;
