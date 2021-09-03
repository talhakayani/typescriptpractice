/**
 * as we know classes have 3 portions
 * attributes / fields
 * a constructor
 * and functions
 * so let's implement this in typescript which it self OOP language
 */
var Person = /** @class */ (function () {
    function Person(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }
    Person.prototype.display = function () {
        console.log("Name: " + this.name + "\nage: " + this.age + "\nheight: " + this.height + "\nweight: " + this.weight);
    };
    Person.prototype.calculateBMI = function () {
        return this.weight / (this.height * 2);
    };
    return Person;
}());
var person = new Person('Talha', 23, 5.11, 85);
person.display();
console.log('calculate BMI: ' + person.calculateBMI());
