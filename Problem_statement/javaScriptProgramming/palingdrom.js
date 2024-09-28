// Helper function to check if a string is a palindrome
function isPalindrome(str) {
    const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');  // Normalize string
    const reversedStr = normalizedStr.split('').reverse().join('');     // Reverse string
    return normalizedStr === reversedStr;  // Check if the string is equal to its reverse
  }
  
  // Function to find all palindromes in a list
  function findPalindromes(list) {
    const palindromes = [];
  
    for (let i = 0; i < list.length; i++) {
      if (isPalindrome(list[i])) {
        palindromes.push(list[i]);  // Add palindrome to the result list
      }
    }
  
    return palindromes;
  }

  // Test the function
  const words = ["hello", "world", "javascript", "madam"];
  const result = findPalindromes(words);
  console.log(result);  // Output: [ 'olleh', 'dlrow', 'tpircsavaj', 'madam' ]
  

