export default function script03() {
  // IF / ELSE IF / ELSE

  let finalNote = 11;

  if (finalNote < 6) {
    console.log('Reprovado :(');
  } else if (finalNote < 8) {
    console.log('Recuperação  :/');
  } else if (finalNote <= 10) {
    console.log('Aprovado :)');
  } else {
    console.log('Nota inválida!');
  }

  // OPERATOR TERNARY
  let age = 19;

  let isAdult = age >= 18 ? 'É adulto' : 'Não é adulto';

  console.log(isAdult);
}
