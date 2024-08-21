const Index = () => {
  const fullTime = new Intl.DateTimeFormat('pt-br', {
    timeStyle: 'short',
    hour12: false,
  }).format();

  const hour = new Date().getHours();
  let greeting = '';

  if (hour >= 0 && hour < 12) {
    greeting = 'Bom dia 😀';
  } else if (hour >= 12 && hour < 18) {
    greeting = 'Boa tarde 😎';
  } else if (hour >= 18 && hour <= 23) {
    greeting = 'Boa noite';
  }

  return (
    <>
      <h2 className="text-center text-9xl mb-4">{fullTime}</h2>
      <p className="text-5xl font-bold text-center">{greeting}</p>
    </>
  );
};

export default Index;
