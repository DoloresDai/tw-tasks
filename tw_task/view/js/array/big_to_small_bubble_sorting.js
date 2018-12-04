 var a = [5, 1, 8, 10, 4];
 for (var i = 0; i < a.length - 1; i++) {
   for (var j = 0; j < a.length - 1 - i; j++) {
     if (a[j] < a[j + 1]) {
       var b = a[j];
       a[j] = a[j + 1];
       a[j + 1] = b;
     }
   }
 }
 console.log(a);