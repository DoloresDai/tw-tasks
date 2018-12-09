var timing = 0;
var time;

function getTime() {
    document.getElementById("result").value = timing;
    timing = timing + 1;
    time = setTimeout("getTime()", 1000);
}

function stopTiming() {
    timing = 0;
    setTimeout("document.getElementById('result').value = time", 0);
    clearTimeout(time);
}