export default function script07() {
  // OBJECTS

  const pokemon = {
    id: '001',
    name: 'Bulbasaur',
    img_url: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',

    attack1() {
      return `attack powerlight`;
    },

    specials: [
      { nivel: 'nivel 1', power: 132 },
      { nivel: 'nivel 2', power: 220 },
    ],
  };

  console.log(pokemon.name);
  console.log(pokemon.img_url);
  console.log(pokemon.attack1());
  console.log(pokemon.specials[0].nivel);
  console.log(pokemon.specials[0].power);
}
