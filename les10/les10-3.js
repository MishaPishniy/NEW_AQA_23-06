class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} їсть`);
  }
}

class Dog extends Animal {

    constructor(name , color){
        super(name)
        this.color = color

    }

    brak(){
        console.log(`${this.name} гавкає`)
    }

    showinfo() {
        console.log(`${this.name} ${this.color}`)
    }
}
const dog1 = new Dog("Gav", "Black")
const animal = new Animal("Тварини")
const dog = new Dog("Рекс")
animal.eat()
dog.eat()
dog.brak()


/*
class Cat  extends Animal {
    brak(){
        console.log(`${this.name} мявкає`)
    }
}*/