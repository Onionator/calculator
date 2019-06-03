$(function() {
  //assume "bear" is typed
  var sentence = prompt("tell me your favorite animal");

  //this function makes the first and last letters capitalized
  var capitalEnds = function(sentence) {
    //assigns B to firstLetter
    var firstLetter = sentence.charAt(0).toUpperCase();
    //this measures the length of the sentence and sutracts 1
    var sentenceLength = sentence.length - 1;
    //addigns R to lastLetter
    var lastLetter = sentence.charAt(sentenceLength).toUpperCase();
    //this cuts off the first letter - ear
    sentence = sentence.slice(1)
    //this adds firstLetter to sentence - Bear
    sentence = firstLetter + sentence;
    //this cuts off the last letter from Bear making it - Bea
    sentence = sentence.slice(0, sentenceLength);
    //adds R to Bea making it - BeaR
    sentence = sentence + lastLetter;
    alert(sentence);
  }

  capitalEnds(sentence);
});
