var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};

function fruitNumber(fruit) {
  var counts = 0;
  for (var prop in fruit) {
    counts += fruit[prop];
  }
  return counts;
}
fruitNumber(fruit);