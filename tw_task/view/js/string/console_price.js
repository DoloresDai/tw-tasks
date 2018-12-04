var money = '￥20';

function getPrice(money) {
  return money.slice(1, 3);
}
console.log(getPrice(money));