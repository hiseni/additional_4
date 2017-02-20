module.exports = function multiply(first, second) {
  first = first.split('').reverse();
  second = second.split('').reverse();

  let product = [];

  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (!product[i + j]) {
        product[i + j] = 0;
      }

      product[i + j] += first[i] * second[j];
    }
  }

  for (var i = 0; i < product.length; i++) {
    if (product[i] >= 10) {
      if (!product[i + 1]) {
        product[i + 1] = 0;
      }

      product[i + 1] += Number.parseInt(product[i] / 10);
      product[i] %= 10;
    }
  }

  return product.reverse().join('');
}
