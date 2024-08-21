import Card from './Card';

const Index = () => {
  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 02</h1>
        <p>Component com Children</p>
      </header>

      <div className="grid place-content-center h-screen">
        <Card>
          <h4 className="text-md text-green-900">
            <strong className="text-xl">Success:</strong> Updated member status{' '}
            <span className="cursor-pointer text-4xl text-green-400">
              &times;
            </span>
          </h4>
        </Card>
      </div>
    </section>
  );
};

export default Index;
