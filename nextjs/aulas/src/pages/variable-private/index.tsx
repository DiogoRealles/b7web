import React from 'react';

type Props = {
  nome: string;
};

const Index = ({ nome }: Props) => {
  return (
    <div>
      <h1>Variável privada</h1>

      <p>Nome: {nome}</p>
    </div>
  );
};

export default Index;

export const getStaticProps = () => {
  return {
    props: {
      nome: process.env.NOME,
    },
  };
};
