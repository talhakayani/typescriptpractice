/**
 * functions are main part of the javascript programming language
 * a function can be written in 2 types
 * simple function with function keyword and a arrow function let's try both
 * we will try to implement pure functions
 */
const welcome = function () {
  console.log('welcome to functions');
};

const add = function (number1: number, number2: number) {
  console.log(number1 + number2);
};

// arrow function
const add_arrow = (number1: number, number2: number) =>
  console.log(number1 + number2);

//let's try to implement returning functions

const multiplication = function (num1: number, num2: number) {
  return num1 * num2;
};

// implementing returning fuction with arrow functions
const division = (num1: number, num2: number) => num1 / num2;
/**
 * in arrow function we don't need to specify the function keywords and return
 * keyword while returnin the value it will automatically return the value if
 * the function is single lined as written above
 * what if we have multiple line in arrow function?
 * let's solve this
 */

const BMI = (weight: number, height: number) => {
  const bmi = weight / (height * 2);
  return bmi;
};

//Now Calling the functions
welcome();
add(10, 20);
add_arrow(40, 30);

//calling returning function
const divisionResult = division(12, 6);
console.log(divisionResult);

// we also print the result by calling directly in side the console function
console.log(multiplication(3, 4));
console.log(BMI(85, 5.11));

/**
 * we also pass the functions to the functions this property is usefull for callbacks
 */

const display = function (num1: number, num2: number, fun: any) {
  fun(num1, num2);
};

display(10, 20, add);

/**
 * this is how we pass the function as a parameter to other function
 */
