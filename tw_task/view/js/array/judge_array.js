var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];

function judgeArray() {
  if (a instanceof Array) {
    document.write("</br>a is array</br>");
  }
  else {
    document.write("a is not array</br>");
  }
  if (b instanceof Array) {
    document.write("b is array</br>");
  }
  else {
    document.write("b is not array");
  }
}
console.log(judgeArray());