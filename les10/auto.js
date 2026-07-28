export class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  startEngine() {
    console.log(` ${this.brand} Двигун запущено`);
  }

  showInfo() {
    console.log(` ${this.brand}  ${this.model} ${this.year}`);
  }
}
