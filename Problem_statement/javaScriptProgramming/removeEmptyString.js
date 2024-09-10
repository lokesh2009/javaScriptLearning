// Remote empty string
function removeEmptyStrings(arr) {
    return arr
        .reduce((acc, val) => {
            if (val !== '') {
                acc.cleanedArray.push(val);
            } else {
                acc.removedElements.push(val);
            }
            return acc;
        }, { cleanedArray: [], removedElements: [] });
}

let inputArray = ["hello", "", "world", "", "!", " "];
let result = removeEmptyStrings(inputArray);

console.log("Cleaned Array:", result.cleanedArray);
console.log("Removed Elements:", result.removedElements);