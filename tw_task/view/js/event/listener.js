var ul = document.getElementById("no");
var lis = ul.getElementsByTagName("li");

function listener(lis) {
    let len = lis.length;
    let i;
    for (i = 0; i < len; i++) {
        lis[i].onclick = function() {
            alert(this.innerHTML);
        }
    }
}
console.log(listener(lis));