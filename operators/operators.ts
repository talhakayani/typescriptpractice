let a: number = 10,
  b: number = 20;

// Arithmetic Operators
console.log(a + b);
console.log(b - a);
console.log(b / a);
console.log(a * b);
console.log(b % a);
console.log(a++);
console.log(b--);

// Relational operators
console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);
console.log(a == b);
console.log(a != b);

//Logical Operators
let c: number = 13;
console.log(a < b && a > c);
console.log(a > b || a < c);
console.log(!(a > b) && !(b < c));

//Assignment operators
console.log((a += b));
console.log((b -= a));
console.log((c = a));
console.log((b /= a));
console.log((c *= a));

//conditional operators:
a > b ? console.log('A is greater') : console.log('B is greater');

// Type-of operator
console.log(typeof a, typeof b, typeof c);
