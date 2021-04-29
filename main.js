const output = document.querySelector("#return")
const button = document.querySelector("#submit-button")

const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 
"y", "z", " " ];

const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--",
"-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--..", "/" ];

const getInput = () => {
  inputValue = document.querySelector("#myInput")
  return inputValue
}

const wordToTranslate = () => {
 word = getInput().value 
 lowerCaseWord = word.toLowerCase()
 let letterArr = lowerCaseWord.split('')  
 return letterArr
};

const loopThrough = (word) => {
  let emptyString = ""
  for (i=0; i < word.length; i++) {    
     let indexOfAlphabet = alphabet.indexOf(word[i])
     emptyString +=  `${morse[indexOfAlphabet]} ` 
     }
  return emptyString
}

  button.addEventListener("click", () => {
     let theWord = wordToTranslate()
     output.innerHTML = loopThrough(theWord)     
  })