function access(str){
    for(let i =0; i<str.length;i++){
        const char = str[i];
        console.log(`Charcter at index ${i}:${char}`)
    }
}

let str = "GeeksforGeeks"
let result = access(str)
console.log(result)