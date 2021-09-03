interface calculation {
  calArea: () => number;
}

class Shape {
  area: number;
  className: string;

  constructor(className: string) {
    this.className = className;
    this.area = 0.0;
  }

  display(): void {
    console.log(`Area of ${this.className}: ${this.area}`);
  }
}

class Circle extends Shape implements calculation {
  radius: number;

  constructor(className: string, radius: number) {
    super(className);
    this.radius = radius;
  }
  calArea(): number {
    this.area = 3.14 * (this.radius * 2);
    return this.area;
  }
}

class Triangle extends Shape implements calculation {
  base: number;
  height: number;

  constructor(className: string, base: number, height: number) {
    super(className);
    this.base = base;
    this.height = height;
  }
  calArea(): number {
    this.area = (this.base * this.height) / 2;
    return this.area;
  }
}

const circle: Circle = new Circle('Circle', 13);
const triangle: Triangle = new Triangle('Triangle', 10, 32);
circle.calArea();
circle.display();
triangle.calArea();
triangle.display();

/**
 * Method overridding concepts in inheritance
 */

class Subject {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(): void {
    console.log('Subject Name: ' + this.name);
  }
}

class English extends Subject {
  creditHours: number;

  constructor(creditHours: number) {
    super('English');
    this.creditHours = creditHours;
  }

  display(): void {
    /**
     * here we also call the display function from the super class but
     * for explaining and understanding the concept of overriding we will use own
     * implementation of sub class
     */
    console.log(`Subject name: ${this.name}\nCreditHours: ${this.creditHours}`);
  }
}

const english: English = new English(4);
english.display(); //this will call the display function implemented in the sub class

/**
 * let's talk about static keyword
 * this will be initalized inside of any class this means that the object or
 * function is declared following the static keyword then that function or
 * field is only be accessable by class name it self it will
 * not accessable by it's objects
 *
 * let's code this
 */

class Sample {
  static num: number;

  constructor() {
    console.log('Sample class object is created');
  }
  static display(): void {
    // here we can't access the static variable by this keyword
    // we use the class name instead
    console.log('Sample Number is: ' + Sample.num);
  }
}

Sample.num = 23;
Sample.display();
