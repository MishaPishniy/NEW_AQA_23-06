async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/19"
    );

    if (!response.ok) {
      throw new Error(`HTTP-помилка: ${response.status}`);
    }

    const user = await response.json();

    console.log(user);
  } catch (error) {
    console.log("Не вдалося отримати користувача");
    console.log(error.message);
  }
}

getUser();