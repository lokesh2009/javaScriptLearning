

function pairfind(str){
  const res = [];
  for(let i =0; i<str.length; i+=2){
    const pair = str[i] + (str[i + 1] || '_');
    res.push(pair)
  }
  return res
}


// Other solutions
function solution1(s){
  return (s+"_").match(/.{2}/g)||[]
}

let value = pairfind("abcdefg")
console.log(value)

let sol = solution1("abcdef")
console.log(sol)

//Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
  
  if (n <= 0 || m <= 0) {
        return 0;
    }
    // Otherwise, return the product of n and m
    return n * m;
}

let res1 = paperwork(5, -5)
console.log(res1)

