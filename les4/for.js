for (let i = 0; i < 10; i += 2) {
  console.log(i);
}
console.log("end");

let a = 5;
if (a > 3) {
  for (let j = 0; j < 10; j++) {
    console.log(j + "j");
    for (let i = 0; i < 5; i++) {
      console.log(i + "i");
    }
  }
} else {
  console.log(a);
}
