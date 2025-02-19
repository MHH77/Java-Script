const mark = {
  fullName: "Mark Miller",
  mass: 78,
  hight: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.hight ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  hight: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.hight ** 2;
    return this.bmi;
  },
};

mark.calcBMI();
console.log(mark.bmi);
console.log(john.calcBMI());
