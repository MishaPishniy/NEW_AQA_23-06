/*Напиши функцию getMax, 
которая принимает два числа и возвращает большее из них.*/

function getMax(number1, number2) {
  if (number1 > number2) {
    return number1;
  } else if (number2 > number1) {
    return number2;
  } else if (number1 === number2) {
    return "Числа рівні";
  }
}
let result = getMax(1, 2);
console.log(`${result}`);
