import Card from './Card';

const Index = () => {
  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 01</h1>
        <p>Componenete com Props</p>
      </header>

      <div className="grid place-content-center h-screen">
        <Card
          id={1}
          name="Bulbasaur"
          img_url="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
          weaknesses={['fire', 'ice', 'psychic']}
        />
      </div>
    </section>
  );
};

export default Index;
