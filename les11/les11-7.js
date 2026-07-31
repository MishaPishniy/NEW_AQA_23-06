const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Операція виконана успішно");
  } else {
    reject("Сталася помилка");
  }
});

promise
        .then((result) =>{
            console.log(result)
        } )
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            console.log("Я є завжди")
        })