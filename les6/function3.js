console.log("Hi Alex");
console.log("Hi Masha");

function sayHi(name) {
  console.log(`Hi ${name}`);
}

function sayHi(name) {
  console.log("Hi" + " " + name);
}

sayHi("Alex");
sayHi("Masha");

function sum(a, b) {
  return a + b;
}

let result = sum(5, 10);
let sum1 = result + 5;
console.log(sum1);

function ages(age) {
  if (age < 18) {
    return console.log("Менше 18");
  } else {
    return console.log("Більше 18");
  }
}

ages(19);

sum(1, 2);

function sum(a, b) {
  console.log(a + b);
}
const result = sum(5, 10);
console.log(result);
sum(5, 10);
