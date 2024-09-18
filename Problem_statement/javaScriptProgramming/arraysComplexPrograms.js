
// Merge two arrays and remove duplicates.
let array1 = [1, 2, 3];
let array2 = [2, 3, 4, 5];

let merged = [...new Set([...array1,...array2])]
console.log(merged);

//Find the intersection (common elements) of two arrays.

let intersection = array1.filter(value =>array2.includes(value));
console.log(intersection)


// Sum of square using map and reduce
let sumofsquare = array1.map(num =>num *2).reduce((acc, curr)=>acc+curr,0)
console.log(sumofsquare)

//Find the Longest Substring Without Repeating Characters

function longestUniqueSubstring(str) {
    let maxLength = 0;
    let currentSubstring = '';
    
    for (let char of str) {
        // If the character is already in the substring, remove characters from the start
        // until the repeated character is removed
        if (currentSubstring.includes(char)) {
            currentSubstring = currentSubstring.slice(currentSubstring.indexOf(char) + 1);
        }
        currentSubstring += char; // Add the new character to the substring
        maxLength = Math.max(maxLength, currentSubstring.length);
    }
    
    return maxLength;
}

// Example usage
let inputString = "ababcedada";
console.log(longestUniqueSubstring(inputString)); // Output: 3 (substring: "abc")
