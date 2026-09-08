setTimeout(() => {
  console.log("Крок 1");

  setTimeout(() => {
    console.log("Крок 2");

    setTimeout(() => {
      console.log("Крок 3");
    }, 1000);
  }, 1000);
}, 1000);