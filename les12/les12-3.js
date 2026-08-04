async function getMessage() {
  return "Привіт";
}

const result = getMessage();

console.log(result);


/////
function getMessage() {
  return Promise.resolve("Привіт");
}
getMessage().then((message) => {
  console.log(message);
});

////
async function getMessage() {
  return "Привіт";
}
async function showMessage() {
  const message = await getMessage();

  console.log(message);
}

showMessage();