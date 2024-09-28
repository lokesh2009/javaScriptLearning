function access(str){
    for(let i =0; i<str.length;i++){
        const char = str[i];
        console.log(`Charcter at index ${i}:${char}`)
    }
}


  function reverseString(str) {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
  }

let str = "GeeksforGeeks"
let result = access(str)
console.log(result)

let stri="Sunny";

console.log(reverseString(stri));