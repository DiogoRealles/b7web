'use client';

import { useEffect, useState } from 'react';

const Index = () => {
  const [name, setName] = useState('Gabriela');
  const [age, setAge] = useState(24);

  useEffect(() => {
    console.log('Effect run..');
  }, [age]);
  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 14</h1>
        <p>Effect</p>
      </header>

      <div className="grid place-content-center h-screen">
        <p className="mb-4">
          My name is: <strong>{name}</strong>, i have <strong>{age}</strong>{' '}
          years old.
        </p>

        <div className="flex gap-8">
          <button
            onClick={() => setName('Asuna')}
            className="py-1 px-4 border rounded"
          >
            Asuna
          </button>
          <button
            onClick={() => setName('Diogo')}
            className="py-1 px-4 border rounded"
          >
            Diogo
          </button>
          <button
            onClick={() => setAge(22)}
            className="py-1 px-4 border rounded"
          >
            22
          </button>
          <button
            onClick={() => setAge(33)}
            className="py-1 px-4 border rounded"
          >
            33
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;
