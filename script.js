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

  // Iterate through the string again to find the first non-repeated character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Test the function with an example string
const input = "aabbccddeeffg";
const result = firstNonRepeatedChar(input);
console.log(`The first non-repeated character is: ${result}`);
