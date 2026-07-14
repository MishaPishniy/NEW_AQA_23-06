function calculatin( a , b , operation) {
    return  operation(a,b)
}

function sum ( a,b) {
    return a + b
}

function del(a,b) {
    return a -b
}

function multi ( a,b) {
    return a * b
}

/*
console.log(sum(5,5))
console.log(calculatin(5,5,5)) 

operation = function sum
*/

console.log(calculatin(5,5,sum))
console.log(calculatin(5,5,del))
console.log(calculatin(5,5,multi))



function sum ( a = 10,b = 5) {
    return a + b
}
console.log(sum(5,5))