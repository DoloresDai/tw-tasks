//First way
function reverseString(message) {
    if (message.length == 0) {
        return null;
    }
    return message.split('').reverse().join('');
}
reverseString('hello');
//Second way
function reverseString(message) {
    var length = message.length - 1;
    for (i = length; i >= 0; i--) {
        document.write(message.charAt(i)); //return;console.log
    }
}
reverseString("hello");