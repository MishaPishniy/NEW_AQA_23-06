async function getUser() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users/19"
  );

  const user = await response.json();

  //console.log(user);
  console.log(user.name);
  console.log(user.email);
  console.log(response.status);
  console.log(response.ok);
}

getUser();
