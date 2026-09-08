function showMessage() {
  console.log("Минуло 2 секунди");
}

setTimeout(showMessage, 2000);
//
setTimeout(showMessage(), 2000);

//
setTimeout(() => {
  console.log("Минуло 2 секунди");
}, 2000);