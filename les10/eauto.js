import {Car} from "./auto.js"

export class Ecar extends Car {
    constructor (brand , model, year, estart){
       super(brand , model, year)
       this.estart = estart
    }

    showInfo() {
    console.log(` ${this.brand} ${this.estart} Ecar`);
  }

}