function firstNonRepeatedChar(str) {
  // Create an object to store the count of each character in the string
  const charCount = {};

  // Iterate through the string to count the occurrences of each character
  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Iterate through the string to find the first non-repeated character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
