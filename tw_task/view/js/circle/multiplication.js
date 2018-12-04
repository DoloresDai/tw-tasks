var num = 0;
for (i = 1; i < 10; i++) {
  for (j = 1; j <= i; j++) {
    num = "\n" + i * j;
    document.write(j + "*" + i + "=" + num + "\n");
  }
  document.write("<br>");
}