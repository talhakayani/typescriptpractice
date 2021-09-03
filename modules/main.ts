import { Circle } from './circle';
import { Triangle } from './triangle';

const circle = new Circle(12);
const triangle = new Triangle(12, 2);

console.log(circle.calArea());
console.log(triangle.calArea());
