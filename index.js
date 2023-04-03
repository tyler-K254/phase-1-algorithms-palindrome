function isPalindrome(word) {
  reverseWord = word.split("").reverse().join("");
  
  if (word === reverseWord) {
    return true
  }else{
    return false
  }
}

/* 
  Add your pseudocode here
*/

/*
  The reversse of the Argument of the function Palindrome should be the same as
  the object is palindrome

  take an argument

  reverse the argument

  if the reverse of the argument is the same as the argument, return true

  if the reverse of the argument is not the same as the argument, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


