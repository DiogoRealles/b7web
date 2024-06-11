import Greeting01 from './Greeting01';
import Greeting02 from './Greeting02';

const Index = () => {
  return (
    <section className="w-full bg-gradient-to-r from-sky-500 to-indigo-500">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 03</h1>
        <p>Componente com Condicional</p>
      </header>

      <div className="grid place-content-center h-screen">
        {/* <Greeting01 /> */}
        <Greeting02 />
      </div>
    </section>
  );
};

export default Index;
