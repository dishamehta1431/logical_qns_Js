// a palindrome is a word that read the same word from forward and backward. this ignores spaces and capitalization

let word = "MADAM";

const checkPalindrome = (word) => {
  const cleanedWord = word.toLowerCase();
  const reverseWord = cleanedWord.split("").reverse().join("");

  // check forward and backward is same or not

  if (cleanedWord === reverseWord) {
    console.log("given string is palindrome", word);
  } else {
    console.log("given string is not palindrome");
  }
};

checkPalindrome(word);

// now using without any method

const checkPalindromeString = (str) => {
  let cleanedword = str.toLowerCase();

  let reversed = "";

  for (let i = cleanedword.length - 1; i >= 0; i--) {
    reversed += cleanedword[i];
  }

  cleanedword == reversed
    ? console.log("given string is palindrome string", str)
    : console.log("given string is not palindrome string");
};

checkPalindromeString(word);
