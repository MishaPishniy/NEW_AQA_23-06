function checkAge(age) {
  if (age >= 0) {
    if (age >= 18) {
      return "Доступ дозволено";
    } else {
      return "Доступ заборонено";
    }
  } else {
    return "Некоректний вік";
  }
}

//Early 
function checkAge(age) {
  if (age < 0) {
    return "Некоректний вік";
  }

  if (age < 18) {
    return "Доступ заборонено";
  }

  return "Доступ дозволено";
}


//приклад 
function example(number) {
  if (number < 0) {
    return "Число від’ємне";
  }

  console.log("Цей код виконається тільки для числа 0 або більше");

  return "Число коректне";
}

console.log(example(5));