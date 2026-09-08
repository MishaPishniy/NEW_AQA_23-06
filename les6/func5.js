function sum(...numbers) {
  let result = 0;
  for (const number of numbers) {
    result += number;
  }
  return result
}

console.log(sum(1,2))
console.log(sum(1,2,3,4,5,6,7))



function sum(...numbers) {
  let result = 0;
  for (let i = 0 ; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result
}

console.log(sum(1,2))
console.log(sum(1,2,3,4,5,6,7))



function sum(a,b,...numbers) {
  let result = a+b;
  for (const number of numbers) {
    result += number;
  }
  return result
}

console.log(sum(1,1,2,3,4))
console.log(sum(1,2,3,4,5,6,7))
