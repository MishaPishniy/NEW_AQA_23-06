class Car {
    constructor (brand , model, year){
        this.brand = brand
        this.model = model
        this.year = year
    }

    startEngine() {
    console.log(` ${this.brand} Двигун запущено`);
  }
}

const car1 = new Car("Audi" , "A7" , 2015)
const car2 = new Car("BMW" , "x7" , 2025)

console.log(car1)
console.log(car2)

car1.startEngine()
car2.startEngine()