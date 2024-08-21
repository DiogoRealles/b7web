export default function script05() {
  // FUNCTION

  function greeting(name) {
    console.log(`Hello wolrd mr. ${name}`);
  }

  greeting('Diogo');

  // ARROW FUNCTION
  const sum = (x, y) => {
    return x + y;
  };

  console.log(sum(10, 5));
}
