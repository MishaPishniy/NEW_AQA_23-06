const user = {
  name: "Михайло",
  age: 25,
 
}
console.log(user?.address?.city)
console.log(user?.addressy?.city ?? "Міста не має")
//console.log(user.address.city)