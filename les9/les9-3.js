const user = {
  name: "Михайло",
  age: 25
};


for ( const key in user) {
    console.log(`${key}: ${user[key]}`)
}

const user1 = user
const user2 = {...user}

user1.name = "Sasha"
user2.name = "Dasha"

const user3 = structuredClone(user)

console.log(user1)
console.log(user)
console.log(user2)
console.log(user1)
console.log(user)

const adr = {
    city: "Kamyanske"
}

const name = {
    FirstName : "Misha",
    city: "Dnipro"
}

const user5 = {
    ...adr,
    ...name
}

console.log(user5)

