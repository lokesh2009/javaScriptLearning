let str = 10.287456;
console.log(typeof(str))
console.log(str.valueOf())
console.log(str.toFixed(2))

let value = "Sunny"
console.log(value)

let str2 = `Sunny
*Mohab
*Delhi`;
console.log(str2)

let str3 = `Hello`;

console.log( str3[-2] ); // undefined
console.log( str3.at(-1) ); // l

for (let char of "Hello") {
    console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
  }

  // index of ka use
  let str4 = `As sly as a fox, as strong as an ox` 
  let target = "as"
  let pos =0;
  while(true){
    let foundpos = str4.indexOf(target,pos)
    if(foundpos==-1)
        break;
    console.log(`found at ${foundpos}`);
    pos=foundpos+1
  }

  // index of we can use in if condition
  let str5 = "Widget with id";

  if (str5.indexOf("Widget") != -1) {
      console.log("We found it"); // works now!
  }
