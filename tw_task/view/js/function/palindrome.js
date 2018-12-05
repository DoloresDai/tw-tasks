function palindrome(message) {
  var letters = message.split('');
  var newMessage = letters.reverse().join('');
  return newMessage == message;
}
palindrome('hello'); // should return false
palindrome('abcba');