const sum = function(a,b) {
    return a + b;
}

console.log(sum(5,10));


const sum1 = (a,b) => {
    return a + b;
}
console.log(sum1(5,10));

const sum2 = (a,b) => a+ b;
console.log(sum2(5,10));

const name = () => console.log('hi');
name();

const multiply = function(a,b){
    const result = a * b;
    console.log('result', result);
    return result;
}
multiply(5, 10);
let H = multiply(5, 10) * 2;
console.log(H);