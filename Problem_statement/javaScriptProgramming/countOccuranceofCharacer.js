// Geeks for Geeks 
// Logic apply seprate task string words device using split 

function countToFrequency(inputString, targetChar){

    const StringArray = inputString.split("")
    const count = StringArray.filter((char)=>char===targetChar).length;
    return count
}

const text = "Hello Geeks"
 const charToCount="e"

 console.log(countToFrequency(text,charToCount))

 // When need to find Charcount

 function countCharacterOccurrences(str) {
    let charCount = {};

    // Loop through each character in the string
    for (let char of str) {
        // If the character already exists in the object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // If it's the first time we encounter the character, set its count to 1
            charCount[char] = 1;
        }
    }

    return charCount;
}

// Example usage
let inputString = "hello world";
let result = countCharacterOccurrences(inputString);
console.log(result);


// Using string filter we can

function countCharacterOccurrences(str) {
    let charArray = str.split(''); // Convert the string to an array of characters

    // Create an array of unique characters
    let uniqueChars = [...new Set(charArray)];

    // Map over each unique character and count its occurrences using filter
    let charCount = uniqueChars.map(char => {
        return {
            char: char,
            count: charArray.filter(c => c === char).length
        };
    });

    return charCount;
}

// Example usage
let input = "hello world";
let result1 = countCharacterOccurrences(input);
console.log(result);


// Occurance of character 
debugger
let value = [2,3,5,5,5,3,3,2,6,6]
let res =[]
debugger
for(const i in value){
    res[i] = res[i]?res[i]+1:1;
    debugger
}

console.log(i)
