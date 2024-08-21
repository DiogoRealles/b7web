import Button from './Button';

const Index = () => {
  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 06</h1>
        <p>
          Componente com evento <strong>onClick</strong>
        </p>
      </header>

      <div className="grid place-content-center h-screen">
        <Button />
      </div>
    </section>
  );
};

export default Index;
