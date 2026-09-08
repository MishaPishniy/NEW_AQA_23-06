const user = {
  name: "Михайло",
  age: 25,
  isAdmin: true,
  sayHello (){

    console.log("Hello")

  }
};

console.log(user);
console.log(user.age)

user.sayHello()

user.firstname = "Pyshnyi"
console.log(user);

delete user.name
console.log(user);