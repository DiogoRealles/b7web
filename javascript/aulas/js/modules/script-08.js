export default function script08() {
  // LOOP - FOR

  let tabuada = 3;

  for (let i = 0; i <= 10; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
  }

  // LOOP - WHILE
  let j = 0;

  while (j <= 10) {
    console.log(`${tabuada} x ${j} = ${tabuada * j}`);
    j++;
  }

  //  LOOP -  DO WHILE
  let k = 0;

  do {
    console.log(`${tabuada} x ${k} = ${tabuada * k}`);
    k++;
  } while (k <= 10);
}
