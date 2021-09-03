/**
 * Working with typeScript Objects
 */

const person = {
  firstName: 'Talha',
  lastName: 'kayani',
  sayHello: function () {},
};

console.log(person);

person.sayHello = function () {
  console.log('Hello world');
};

person.sayHello();
