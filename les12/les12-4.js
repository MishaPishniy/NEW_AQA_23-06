function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Дані завантажено");
    }, 2000);
  });
}
///////////
async function showData() {
  console.log("Починаємо завантаження");

  const result = await getData();

  console.log(result);
  console.log("Продовжуємо роботу");
}

showData();