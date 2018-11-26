var sentence = "good afternoon, mr mike.";
function titleCase()
{
  let i, word = sentence.split(" ");
  for (i = 0; i < word.length; i++)
  {
    word[i] = word[i].slice(0, 1).toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
}
document.write(titleCase(sentence));