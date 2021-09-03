import { Calculation } from './areaInterface';

export class Triangle implements Calculation {
  area: number;
  base: number;
  height: number;
  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  calArea(): number {
    this.area = (this.base * this.height) / 2;
    return this.area;
  }
}
