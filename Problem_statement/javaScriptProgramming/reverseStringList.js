// Helper function to reverse a single string
function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }
  
  // Function to reverse each string in the list
  function reverseEachString(list) {
    const reversedList = [];
  
    for (let i = 0; i < list.length; i++) {
      reversedList.push(reverseString(list[i])); // Reverse each string and add to new list
    }
  
    return reversedList;
  }
  
  // Test the function
  const words = ["hello", "world", "javascript", "madam"];
  const result = reverseEachString(words);
  
  console.log(result);  // Output: [ 'olleh', 'dlrow', 'tpircsavaj', 'madam' ]
  