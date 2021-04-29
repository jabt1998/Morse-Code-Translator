"use strict";

var output = document.querySelector("#return");
var button = document.querySelector("#submit-button");
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "];
var morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "/"];

var getInput = function getInput() {
  inputValue = document.querySelector("#myInput");
  return inputValue;
};

var wordToTranslate = function wordToTranslate() {
  word = getInput().value;
  lowerCaseWord = word.toLowerCase();
  var letterArr = lowerCaseWord.split('');
  return letterArr;
};

var loopThrough = function loopThrough(word) {
  var emptyString = "";

  for (i = 0; i < word.length; i++) {
    var indexOfAlphabet = alphabet.indexOf(word[i]);
    emptyString += "".concat(morse[indexOfAlphabet], " ");
  }

  return emptyString;
};

button.addEventListener("click", function () {
  var theWord = wordToTranslate();
  output.innerHTML = loopThrough(theWord);
});