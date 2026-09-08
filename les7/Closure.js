function outer() {
  const message = "Привіт";

  function inner() {
    console.log(message);
  }

  return inner;
}

const showMessage = outer();

showMessage();

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let counter = createCounter()
let counter1 = createCounter()
console.log(counter1());
console.log(counter1());
console.log("---------------------")
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());