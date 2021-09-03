interface Person {
  p_name: string;
  p_age: number;
  p_height: number;
  p_weight: number;

  calBMI: () => number;
}

const PersonDetail: Person = {
  p_name: 'talha',
  p_age: 23,
  p_height: 5.11,
  p_weight: 85.5,
  calBMI() {
    return this.p_weight / (this.p_height * 2);
  },
};

console.log(PersonDetail.calBMI());

console.log(PersonDetail);

/** this is the example of interface with object we will use this inteface with
 * classes according to OOP concepts :)
 */
