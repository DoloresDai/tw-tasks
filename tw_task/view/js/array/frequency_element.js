var num = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var str = num.join("")
var obj = {};
for (i = 0; i < str.length; i++) {
  if (!obj[str.charAt(i)]) {
    obj[str.charAt(i)] = 1;
  } else {
    obj[str.charAt(i)]++;
  }
}
var maxValue = 0;
var maxNum = "";
for (i in obj) {
  if (obj[i] > maxValue) {
    maxValue = obj[i];
    maxNum = i;
  }
}
document.write("出现频率最高的元素是" + i);