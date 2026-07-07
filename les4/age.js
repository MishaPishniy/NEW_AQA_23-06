let age = 10;

/* 
1 age < 18 - "Малий"
2 age >= 18 && age < 65 - "Дорослий"
3 age >= 65 - "Пенсіонер"
*/
if (age < 0 || age >= 120) {
  console.log("Невірний вік");
} else if (age > 0 && age < 18) {
  console.log("Малий");
} else if (age >= 18 && age < 65) {
  console.log("Дорослий");
} else if (age >= 65 && age < 120) {
  console.log("Пенсіонер");
}

let age = 10 
switch (true) {
  case age < 0 || age >= 120:
    console.log("Невірний вік");
     break;
  case age > 0 && age < 18:
    console.log("Малий");
     break;
  case age >= 18 && age < 65:
    console.log("Дорослий");
     break;
  case age >= 65 && age < 120:
    console.log("Пенсіонер");
    break;
  default:
    console.log("Не відомо що ввели");
}
