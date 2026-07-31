console.log("Початок");

setTimeout(() => {
  console.log("Таймер завершився");
}, 2000);

console.log("Кінець");


//
console.log("Перше");

setTimeout(() => {
  console.log("Друге");
}, 0);

console.log("Третє");