export default function script11() {
  // POO - CLASS - MOLDE

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  // POO - CLASS - INSTANCE
  const person1 = new Person('Ana', 19);
  console.log(person1.name);
}
