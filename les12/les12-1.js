const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Дані отримано");
  } else {
    reject("Сталася помилка");
  }
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });