async function createUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: "Михайло",
          email: "mykhailo@example.com",
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP-помилка: ${response.status}`);
    }

    const createdUser = await response.json();

    console.log(createdUser);
  } catch (error) {
    console.log("Не вдалося створити користувача");
    console.log(error.message);
  }
}

createUser();