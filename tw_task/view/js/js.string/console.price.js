var money = '￥20';
function getPrice(money) {
	let price = money.slice(1,3)
	return price;
}
console.log(getPrice(money));
