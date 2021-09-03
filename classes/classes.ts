/**
 * as we know classes have 3 portions
 * attributes / fields
 * a constructor
 * and functions
 * so let's implement this in typescript which it self OOP language
 */
class Person {
  //Attributes or fields
  name: string;
  age: number;
  height: number;
  weight: number;
  constructor(name: string, age: number, height: number, weight: number) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  display(): void {
    console.log(
      `Name: ${this.name}\nage: ${this.age}\nheight: ${this.height}\nweight: ${this.weight}`
    );
  }
  calculateBMI(): number {
    return this.weight / (this.height * 2);
  }
}

const person: Person = new Person('Talha', 23, 5.11, 85);
person.display();
console.log('calculate BMI: ' + person.calculateBMI());
