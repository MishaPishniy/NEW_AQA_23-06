const sum = function sumab(a, b) {
  const result = a + b;
  function price(sumab) {
    return sumab * 2;
  }
  const fullPrice = price(result);
  console.log("price", fullPrice);
  return result;
};

sum(5, 10);

const sum = function (a, b) {
  const result = a + b;
  function price(value) {
    return value * 2;
  }
  const fullPrice = price(result);
  console.log("price", fullPrice);
  return result;
};

sum(5, 10);
