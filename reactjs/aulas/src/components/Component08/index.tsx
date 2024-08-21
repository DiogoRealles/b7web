import Accordion from './Accordion';

const Index = () => {
  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 08</h1>
        <p>Evento com Condicional + State</p>
      </header>

      <div className="grid place-content-center h-screen">
        <Accordion />
      </div>
    </section>
  );
};

export default Index;
