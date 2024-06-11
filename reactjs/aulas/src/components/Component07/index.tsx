import Counter from './Counter';

const Index = () => {
  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 07</h1>
        <p>Componente com Evento via Props</p>
      </header>

      <div className="grid place-content-center h-screen">
        <Counter />
      </div>
    </section>
  );
};

export default Index;
