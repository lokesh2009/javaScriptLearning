

// Check the program for Convert first character always in upper case


function capitalizeEachWord(str) {
    return str
        .split(' ') // Split the string into words
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
        .join(' '); // Join the words back into a single string
}

// Example usage:
const exampleString = "all is well that all is well";
const capitalizedString = capitalizeEachWord(exampleString);
console.log(capitalizedString); // Output: "All Is Well That All Is Well"