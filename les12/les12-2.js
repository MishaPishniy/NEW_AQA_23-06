getUser()
  .then((user) => {
    return getOrders(user.id);
  })
  .then((orders) => {
    return getOrderDetails(orders[0].id);
  })
  .then((details) => {
    console.log(details);
  })
  .catch((error) => {
    console.log(error);
  });
//////////////////////////
async function showOrderDetails() {
  try {
    const user = await getUser();
    const orders = await getOrders(user.id);
    const details = await getOrderDetails(orders[0].id);

    console.log(details);
  } catch (error) {
    console.log(error);
  }
}