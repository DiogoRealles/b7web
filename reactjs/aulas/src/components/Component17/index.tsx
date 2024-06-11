'use client';

import Header from './Header';
import { ContextCountProvider } from '@/contexts/ContextCount';

const Index = () => {
  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 17</h1>
        <p>States</p>
      </header>

      <div className="grid place-content-center h-screen">
        <p>
          <b>Context:</b> É uma bolha que fica em volta da aplicação, os dados
          ficam nessa bolha e todo os componentes tem acesso aos dados. <br />
        </p>
        <hr />

        <div className="w-full h-screen flex justify-center items-center text-white">
          <ContextCountProvider>
            <Header />
          </ContextCountProvider>
        </div>
      </div>
    </section>
  );
};

export default Index;
