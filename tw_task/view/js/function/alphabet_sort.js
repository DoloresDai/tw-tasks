function alphabetSort(message) {
  var letterValue = message.split("");
  return letterValue.sort().join('');
}
alphabetSort('hello'); // should return 'ehllo'