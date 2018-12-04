var sentence = "good afternoon, mr mike.";

function getLetterOfEachWordCapilizated() {
  let words = sentence.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}
document.write(getLetterOfEachWordCapilizated(sentence));