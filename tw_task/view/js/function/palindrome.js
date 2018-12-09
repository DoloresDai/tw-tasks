function isPalindrome(message) {
    return message.split('').reverse().join('') === message;
}
isPalindrome('hello'); // should return false
isPalindrome('abcba');