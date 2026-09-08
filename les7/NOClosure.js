function outer() {
  const value = 10;

  function inner() {
    console.log(value);
  }

  inner();
}

////////////////////////

let global = "Global";
function outer() {
  let outerV = "Outer";
  return function inner() {
    let inner = "Inner";

    console.log(global);
    console.log(outerV);
    console.log(inner);
  };
 //  console.log(inner);
}
const value = outer();

value();
