const showPets = (name: string, tipo: 'gato' | 'cachorro' | 'hamister') => {
  return `${name} ${tipo}`;
};

console.log(showPets('Mingal', 'cachorro'));
