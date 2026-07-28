const user = {
  name: "Михайло",
  age: 25,
  isAdmin: true,
  sayHello (){

    console.log(`Hello ${this.name}`)

  },
   addres: {
                 adres: "Stusa",
                 city: "Kamyanske"
  },
  arr: [1,2,3,4,5]
};

user.sayHello()
console.log(user)

console.log(user.arr[1])

console.log("lastname" in user)
console.log("age" in user)

console.log(Object.hasOwn(user, "age"))