class Animal {
  /* constructor(name) {
    this.name = name;
  } */

  /*eat() {
    console.log(`${this.name} їсть`);
  } */

  brak() {
    console.log(`Тварина видає звук`);
  }
}

class Dog extends Animal {
  /*   constructor(name, color) {
        super(name)
        this.color = color
    } */

  brak() {
    console.log('Собака гавкає');
  }

  /*    showinfo() {
        console.log(`${this.color} ${this.name} `)
    } */
}
//const dog1 = new Dog("Gav", "Black")
//const animal = new Animal("Тварини")
//const dog = new Dog("Рекс")
//animal.eat()
//dog.eat()
//dog.brak()
//dog.showinfo()

class Cat extends Animal {
  brak() {
    console.log(`Кіт мявкає`);
  }
}

const animals = [new Dog(), new Cat(), new Animal()];

for (const animal of animals) {
  animal.brak();
}
