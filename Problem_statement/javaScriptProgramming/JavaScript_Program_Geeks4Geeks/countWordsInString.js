//Given the string, the task is to count the words of a string using JavaScript.

function wordslen(str)
{
    const array = str.trim().split(/\s+/);
    return array.length;
}
const str ="Wlecome to the jungle";
console.log(wordslen(str))

// Reverse a String logic
function rev(str){
    let res =''
    for(let i=str.length -1;i>=0;i--){
        res+=str[i]
    }
    return res;
}

let str1 = "sunny"
console.log(rev(str1));

// WAP to generate all combination of String

let possibleCombinations = (str) => {
    let combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length + 1; j++) {
            combinations.push(str.slice(i, j));
        }
    }
    return combinations;
}
console.log(possibleCombinations('Dog'));

//palingdrom
  //check palingdrome 2nd method 
 // logic len hamesha even , len nikal lo 
 function isPalindrome(str){
    let j = str.length -1;
    for(let i=0;i<str.length/2;i++){
        if(str[i]!= str[j]){
            return false;
        }
            j--;
    }
    return true;
 }
let str2 = "nitin";
let str3 = "Rama";

console.log(isPalindrome(str1));
console.log(isPalindrome(str2));
console.log(isPalindrome(str3));
