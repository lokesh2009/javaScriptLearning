

function solution(str) {
    const result = [];
    for (let i = 0; i < str.length; i += 2) {
        const pair = str[i] + (str[i + 1] || '_');
        result.push(pair);
    }
    return result;
}

// Other solutions
function solution1(s){
  return (s+"_").match(/.{2}/g)||[]
}

let value = solution("abcdefg")
console.log(value)

let sol = solution1("abcdef")
console.log(sol)
