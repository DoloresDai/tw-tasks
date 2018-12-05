function countWords(message) {
  var words = message.split(" ");
  var length = words.length;
  return length;
}
countWords('Good morning, I love JavaScript.'); // should return 5