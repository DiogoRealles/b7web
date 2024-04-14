const Index = () => {
  const fullTime = new Intl.DateTimeFormat('pt-br', {
    timeStyle: 'short',
    hour12: false,
  }).format();

  const hour = new Date().getHours();
  let greeting = '';

  return (
    <>
      <h2 className="text-center text-9xl mb-4">{fullTime}</h2>
      <p className="text-5xl font-bold text-center">
        {hour >= 0 && hour < 12 && 'Bom dia 😀'}
        {hour >= 12 && hour < 18 && 'Boa tarde 😎'}
        {hour >= 18 && hour <= 23 && 'Boa noite 😴'}
      </p>
    </>
  );
};

export default Index;
