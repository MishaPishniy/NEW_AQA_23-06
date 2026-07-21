// зичайна функція 
function add (a,b) {
    return a * b
}

console.log(add(2,3))
//карування 
function add1 (a){
    return function (b) {
        return a*b
    }
}

console.log(add1(2)(3))


//композиція

function mult(num){
    return num * 2
}

function addAB(num){
    return num + 10
}

const result = addAB(mult(5))
console.log(result)


function compose(firstFun, secondFun){
    return function(value) {
        return firstFun(secondFun(value))
    }
}

function mult(num){
    return num * 2
}

function addAB(num){
    return num + 10
}

const result2 = compose(addAB,mult)

console.log(result2(5))