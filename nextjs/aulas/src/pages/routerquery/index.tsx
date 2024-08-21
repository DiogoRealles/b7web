import { useRouter } from 'next/router';
import React from 'react';

const Index = () => {
  const router = useRouter();
  const { slug } = router.query;
  // const nome = 'anything';

  return (
    <div>
      <h1>useRouter</h1>
      <p>Nome: {slug}</p>
      <p>Pathname: {router.pathname}</p>
      <p>isFallback: {router.isFallback.toString()}</p>

      <p>
        <button onClick={() => router.push('/plataforms/nintendo')}>
          Ir para Nintendo e voltar para aqui
        </button>
      </p>

      <p>
        <button onClick={() => router.replace('/plataforms/nintendo')}>
          Ir para Nintendo e voltar para inicio
        </button>
      </p>
    </div>
  );
};

export default Index;
