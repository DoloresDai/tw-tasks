var sentence = "good afternoon, mr mike.";

function getLetterOfEachWordCapilizated() {
  let word = sentence.split(" ");
  for (let i = 0; i < word.length; i++) {
    word[i] = word[i].slice(0, 1).toUpperCase() + word[i].slice(1);
  }
  return word.join(" ");
}
document.write(getLetterOfEachWordCapilizated(sentence));