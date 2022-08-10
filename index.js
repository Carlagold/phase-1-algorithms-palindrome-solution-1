function reverse(word) {
  // 'abc' => 'cba'
//   const wordArray = word.split("");
//   const reversedWordArray = wordArray.reverse();
//   const reverseWord = reversedWordArray.join("");
//   return reverseWord;
// LOL I did this solution on my first Palindrome LAB
return word.split("").reverse().join(""); 
}

function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string
  const reversedWord = reverse(word)
  // if the input word is the same to the transposed word
  return word === reversedWord
  // if (word === reversedWord) {
  //   return true
  // } else {
  //   return false
  // }
}


/* 
/* Test Cases for validation of undertanding
mom === mom // true
car === rac //false
*/

/* Rewrite the problem in your own words
  Add your pseudocode here
  make function that returns true if a word is a palindrome and false if not.
  if the input word is the same to the transposed word, the return should be true.
*/
/* Test Case
mom === mom // true
car === rac //false
*/
/*
  Add written explanation of your solution here:


*/
/* add pseudocode here
if the input word is the same to the transposed word, the return should be true.
// reverse the input string
if the input is the same as the trasposed input 
 return true
 else 
  return false
*/
  // You can run `node index.js` to view these console logs

if (require.main === module) {
  
//  add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
