var ul = document.getElementById("no");
var lis = ul.getElementsByTagName("li");

function listener(lis) {
  for (var i = 0; i < lis.length; i++) {
    lis[i].onclick = function() {
      alert(this.innerHTML);
    }
  }
}
console.log(listener(lis));