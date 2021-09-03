//strings
var talha: string = 'Talha Kayani';
console.log(talha);

// No interger data type in typescript but use number datatype for NaN
var age: number = 23;
console.log(age);

// Float/Double/decimal numbers
// const used here because we don't need to change it in future
const height: number = 5.11;
console.log(height);

const weight: number = 85.0;
console.log(weight);
//objects
var details: object = { talha, age, height };
console.log(details);

//uninitalized variable with given type;
let BMI: number;
BMI = weight * (height * 2);
console.log(BMI);

/**
 * let's try to change the value of the variable while compiling
 *
 * talha = 123;
 *
 * the above line will give us the compilation error because talha was
 * designed as string we can't assign number to it
 */

/**
 * scope of  variables
 */

const name_: string = 'talha kayani';
const printDetails = function (ages_: number) {
  console.log(`name: ${name_}\nage: ${ages_}`);
};
console.log('Global name_ variable: ' + name_);
printDetails(10);
//console.log('age_ variable passed inside the parameter of function: ' + ages_);
/**
 * in the above code will  explain the scope of the variable
 * name_ is global variable it can be accessed from any where in this file
 *
 * age_ is not a global variable because it was send as an arrgument of a function
 * so it can only be accessable inside the function
 */
