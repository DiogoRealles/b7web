import React from 'react';

const Index = () => {
  return (
    <div>
      <h1>Variável pública</h1>

      <p>Nome: {process.env.NEXT_PUBLIC_NAME}</p>
    </div>
  );
};

export default Index;
