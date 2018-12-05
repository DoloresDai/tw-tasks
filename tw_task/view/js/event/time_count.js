var count = 0;
var time;

function timedCount() {
  document.getElementById('result').value = count;
  count = count + 1;
  time = setTimeout("timedCount()", 1000);
}

function stopCount() {
  count = 0;
  setTimeout("document.getElementById('result').value = 0", 0);
  clearTimeout(time);
}