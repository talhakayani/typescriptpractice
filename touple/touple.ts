/**
 * if we want to save the record with values having different datatypes
 * then what should we do because typescript won't allow to save the different
 * type of values in single array
 * so in this case we have a concept called
 * touple
 * it is similar to an array typed "any" which will help us to store the
 * different type of records in single variable in the form of array
 * let's implement this
 */

let touple: any = ['talha', 23, 5.11];

// now let's display the data;
touple.forEach(data => console.log(data));

// now let's add new data value to the record and this time we will add an object
//let's create an object with details

const weightBmi = {
  weight: 85.5,
  BMI: 26.3,
};
touple.push(weightBmi);

console.log(touple);

// destructuring the touple
const [name_, age, height, details] = touple;
console.log(name_, age, height, details);

//remove the last pushed or last index value
const removed = touple.pop();
console.log(touple, 'removed: ' + removed);
