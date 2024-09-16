

// Check the program for Convert first character always in upper case


function capitalizeEachWord(str) {
    return str
        .split(' ') // Split the string into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the words back into a single string
}

function countDuplicateWords(str) {
    // Split the string into an array of words
    const words = str.toLowerCase().split(/\s+/); // Convert to lower case and split by spaces

    // Create an object to keep track of word counts
    const wordCount = {};

    // Count the occurrences of each word
    words.forEach(word => {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    });

    // Filter the words that have duplicates (appear more than once)
    const duplicates = Object.entries(wordCount).filter(([word, count]) => count > 1);

    // Format the result as an object with word counts
    const result = duplicates.reduce((acc, [word, count]) => {
        acc[word] = count;
        return acc;
    }, {});

    return result;
}


// Example usage:
const exampleString = "all is well that all is well";
const capitalizedString = capitalizeEachWord(exampleString);
console.log(capitalizedString); // Output: "All Is Well That All Is Well"

const duplicates = countDuplicateWords(exampleString);
console.log(duplicates); // Output: { all: 2, is: 2, well: 2 }