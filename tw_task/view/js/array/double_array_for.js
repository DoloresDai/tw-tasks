var a = [1, 2, 3, 4, 5];
console.log(doubleArray(a));

function doubleArray() {
  for (i = 0; i <= a.length - 1; i++) {
    a[i] = 2 * a[i];
  }
}