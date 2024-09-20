let words = ["java", "python", "ansible", "c", "docker"];

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Compare adjacent words
            if (arr[j] > arr[j + 1]) {
                // Swap if the current word is greater than the next word
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

bubbleSort(words);
console.log(words); // Output: ["ansible", "c", "docker", "java", "python"]

//Check order is sorted or not

function checkSortingOrder(arr) {
    let ascending = true;
    let descending = true;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            ascending = false; // If it's greater, it's not ascending
        }
        if (arr[i] < arr[i + 1]) {
            descending = false; // If it's smaller, it's not descending
        }
    }

    if (ascending) {
        return "The array is sorted in ascending order.";
    } else if (descending) {
        return "The array is sorted in descending order.";
    } else {
        return "The array is not sorted.";
    }
}

let words1 = ["ansible", "c", "docker", "java", "python"];
console.log(checkSortingOrder(words1)); // Output: The array is sorted in ascending order.

let words2 = ["python", "java", "docker", "c", "ansible"];
console.log(checkSortingOrder(words2)); // Output: The array is sorted in descending order.

let words3 = ["java", "python", "ansible", "c", "docker"];
console.log(checkSortingOrder(words3)); // Output: The array is not sorted.

