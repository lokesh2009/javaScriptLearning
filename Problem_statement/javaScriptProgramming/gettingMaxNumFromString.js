

// Reverse a word of string
function reverseWords(text){
    let str = text.split(" ");
    str.reverse();
    return str.join(" ")
}

let text = "   geeks for all";
console.log(reverseWords(text));
