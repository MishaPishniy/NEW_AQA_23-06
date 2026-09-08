class User {
  #age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (value < 0) {
      console.log("Вік не може бути від’ємним");
      return;
    }

    this.#age = value;
  }
}

const user = new User("Анна", -20);

console.log(user.age);

user.age = 21;
console.log(user.age);

user.age = -5;