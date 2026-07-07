let a = 5;

if (a > 10) {
  console.log("a");
} else {
  console.log("b");
}
console.log("c");

let b = 11;

if (b > 10) {
  console.log("a");
} else if (b > 6) {
  console.log("b");
} else if (b > 4) {
  console.log("c");
} else {
  console.log("d");
}

let x = 20;
let y = 20;
let h = 8;

if (x > 15) {
  console.log("x > 5");
  if (y > 15) {
    console.log("y>15");
    if (h > 7) {
      console.log("h>7");
    } else if (h < 7) {
      console.log("h<7");
    }
  } else {
    console.log("y < 15");
  }
} else {
  console.log("x < 5");
}

let x = 20;
let y = 20;
let h = 8;
if (x > 15 && y > 15 && h > 7) {
  console.log("x > 15 && y > 15 && h > 7");
} else if (x > 15 && y > 15 && h < 7) {
  console.log("x > 15 && y > 15 && h < 7");
} else if (x > 15 && y < 15 && h > 7) {
  console.log("x > 15 && y < 15 && h > 7");
} else if (x > 15 && y < 15 && h < 7) {
  console.log("x>15 && y < 15 && h < 7");
} else if (x < 15 && y > 15 && h > 7) {
  console.log("x < 15 && y > 15 && h > 7");
}
