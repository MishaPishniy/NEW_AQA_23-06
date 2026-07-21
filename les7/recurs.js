function multiply(a, b) {
  return a * b;
} 0) {

console.log(multiply(2, 5));
console.log(multiply(2, 5));
console.log(multiply(2, 5));

let total = 5 
function addTotal(value) {
    total +=value
    return total
}

console.log(addTotal(5))
console.log(addTotal(5))


let name = "Misha"
function addName() {
    name = "Sasha"
}


function repit () {
    console.log("hi")
    repit()
}


function recursGood (number) { 
    if (number === 0)
        console.log("Start");
        return;
    }

    console.log(number)
    recursGood(number - 1)

}

recursGood(3)



function fuctorial (number) {
    if (number < 0) {
        return "Pomilka < 0"
    }

    let result = 1;
    let i = 2;

    while (i <= number) {
        result *=i
        i++
    }
    return result;
}


console.log(fuctorial(1000))


function fuctorial (number) {
    if (number === 0 || number === 1) {

        return 1;
    }

    return number * fuctorial(number-1)
}

console.log(fuctorial(1000))