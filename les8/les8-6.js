// split()

let number = "Привіт це я";
let res = number.split(" ");
console.log(res);

let number = ["Привіт", "це", "я"]
let res2 = number.join(", ")
console.log(res2)

const num = [1,2,3,4]
num.push(5,6)
console.log(num)
console.log("-----")

const res4 = num.pop()
console.log(res4)
console.log(num)

const res5 = num.shift()
console.log(res5)
console.log(num)

const res6 = num.unshift(0,1)
console.log(res6)
console.log(num)


let arrA = [0,1,2]
let arrB = arrA.slice(0)
console.log(arrB)
arrA.shift()
console.log(arrA)
console.log(arrB)


const arrC = [1,2]
const arrD = [3,4]

const addArr = arrC.concat(arrD)

console.log(addArr)


const ArrA = [1,2,3,4]
ArrA.forEach((number) => { console.log(number * 2)})

const ArrB = ArrA.filter((number) => number%2===0)
console.log(ArrB)