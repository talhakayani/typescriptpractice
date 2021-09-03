/**
 * functions are main part of the javascript programming language
 * a function can be written in 2 types
 * simple function with function keyword and a arrow function let's try both
 * we will try to implement pure functions
 */
var welcome = function () {
    console.log('welcome to functions');
};
var add = function (number1, number2) {
    console.log(number1 + number2);
};
// arrow function
var add_arrow = function (number1, number2) {
    return console.log(number1 + number2);
};
//let's try to implement returning functions
var multiplication = function (num1, num2) {
    return num1 * num2;
};
// implementing returning fuction with arrow functions
var division = function (num1, num2) { return num1 / num2; };
/**
 * in arrow function we don't need to specify the function keywords and return
 * keyword while returnin the value it will automatically return the value if
 * the function is single lined as written above
 * what if we have multiple line in arrow function?
 * let's solve this
 */
var BMI = function (weight, height) {
    var bmi = weight / (height * 2);
    return bmi;
};
//Now Calling the functions
welcome();
add(10, 20);
add_arrow(40, 30);
//calling returning function
var divisionResult = division(12, 6);
console.log(divisionResult);
// we also print the result by calling directly in side the console function
console.log(multiplication(3, 4));
console.log(BMI(85, 5.11));
/**
 * we also pass the functions to the functions this property is usefull for callbacks
 */
var display = function (num1, num2, fun) {
    fun(num1, num2);
};
display(10, 20, add);
/**
 * this is how we pass the function as a parameter to other function
 */
