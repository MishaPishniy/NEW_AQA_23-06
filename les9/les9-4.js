const user = {
  name: "Михайло",
  age: 25,
  city: "Кам’янське"
};


const i = user.name
const a = user.age
const c = user.city
/*
console.log(i)
console.log(a)
console.log(c) */

const { name : NameFirst , ...othe} = user 

console.log(NameFirst)
console.log(othe)
//console.log(city)
//console.log(pol)
//console.log(user)