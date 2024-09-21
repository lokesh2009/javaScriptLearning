let arr =[1,2,3,6,8];
let count = 10;
let output =[];
    for(let i =0; i<count; i++){
        !arr.includes(i)?output.push(i):"";
    }

console.log((output));