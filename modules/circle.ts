import { Calculation } from './areaInterface';
export class Circle implements Calculation {
  area: number;
  radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  calArea(): number {
    this.area = 3.14 * (this.radius * 2);
    return this.area;
  }
}
