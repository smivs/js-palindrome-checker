var word = prompt("Enter a word");

function palindrome(word){
  var upperCase = word.toUpperCase();
  var reversedWord = upperCase.split("").reverse().join("");

  if(upperCase === reversedWord){
     return prompt("Is a palindrome");
     } else {
       prompt("Is not a palindrome");
     }
}

palindrome(word);
