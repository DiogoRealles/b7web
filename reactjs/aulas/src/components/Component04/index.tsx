import EmojiRating01 from './EmojiRating01';
import EmojiRating02 from './EmojiRating02';

const Index = () => {
  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 04</h1>
        <p>Componente com Props</p>
      </header>

      <div className="grid place-content-center h-screen">
        {/* <EmojiRating01 rate={3} /> */}
        <EmojiRating02 rate={4} />
      </div>
    </section>
  );
};

export default Index;
