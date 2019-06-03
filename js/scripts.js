$(function() {
  //assume "bear" is typed
  var sentence = prompt("tell me your favorite animal");
  var sentenceLength = sentence.length;
  var firstLetter;
  var lastLetter;

  //this function makes the first and last letters capitalized
  var capitalEnds = function(sentence, sentenceLength) {
    //assigns B to firstLetter
    firstLetter = sentence.charAt(0).toUpperCase();
    //this measures the length of the sentence and sutracts 1
    sentenceLength--;
    //addigns R to lastLetter
    lastLetter = sentence.charAt(sentenceLength).toUpperCase();
    //this cuts off the first letter - ear
    sentence = sentence.slice(1);
    //this adds firstLetter to sentence - Bear
    sentence = firstLetter + sentence;
    //this cuts off the last letter from Bear making it - Bea
    sentence = sentence.slice(0, sentenceLength);
    //adds R to Bea making it - BeaR
    sentence = sentence + lastLetter;
    return sentence;
  }

  //function swaps the first and last letters
  var reverseEnds = function(sentence, sentenceLength) {
    sentence = sentence.slice(1);
    sentence = lastLetter + sentence;
    sentence = sentence.slice(0, sentenceLength - 1);
    sentence = sentence + firstLetter;
    return sentence;
  }

  //this function adds the first and last letter to the end of the sentence
  var getEnds = function(sentence, firstLetter, lastLetter) {
    sentence = sentence + lastLetter + firstLetter;
    return sentence;
  }

  //puts middle letter at begining of sentenceLength
  var divide = function(sentenceLength) {
    var number = parseInt(sentenceLength / 2);
    firstLetter = sentence.charAt(number + 1);
    sentence = firstLetter + moreWords;
    return sentence;
  }

  //reverses sentence
  var reverseSentence = function(sentence, sentenceLength) {
    var reverse = null;
    for (num = 0; num < sentenceLength - 1; num++) {
      reverse = reverse + sentence.charAt(sentenceLength - num - 1);
    }

  }


  sentence = capitalEnds(sentence, sentenceLength);
  alert(sentence);
  var reverse = reverseEnds(sentence, sentenceLength);
  alert(reverse);
  var moreWords = getEnds(sentence, firstLetter, lastLetter);
  alert(moreWords);
  var dividedWords = divide(sentenceLength);
  alert(dividedWords);
  var finalThing = reverseSentence(dividedWords, sentenceLength)
  alert(finalThing);





});
