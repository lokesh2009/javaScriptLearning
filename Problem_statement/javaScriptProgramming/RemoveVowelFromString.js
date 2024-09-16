function removeVowelFromString(str){
    return str.replace(/[aeiouAEIOU]/g,'')
}
let inputString ="sunny day"
let result = removeVowelFromString(inputString)
console.log(result)

// Remove first and last character from String

function RemoveFirstAndLastChar(str){
    return str.slice(1,-1)

}

const str = "SunnyDay is cool"
let resultS = RemoveFirstAndLastChar(str);
console.log(resultS) 

// Remove duplicate character form String

function removeDuplicateChar(str){
    let output =" ";
    for(let i=0; i<str.length;i++){
        if(str[i]!==str[i+1]){
            output+=str[i]
        }
    }
    return output;

}
// Remove duplicate char using filtrer
// Filter is a callback function  syntax array.filter(callback(element,index,array))
function removeDuplicatefilter(str){
    return str.split('').filter((char,index,arr)=>
        char!==arr[index -1]).join('')
    
}

let res=removeDuplicateChar("sunny cool")
console.log(res)

// Use filter method in arrayObjects

const users =[

    {name:'Lokesh',age:41},
    {name:'Sunny',age:45},
    {name:'Pinkoo',age:21}
];

const filterAbove30 = users.filter(user => user.age<30)
console.log(filterAbove30)

// Filter based on index

let value = ['apple','grapes','pineapple', 'bananna']

const evenwords = value.filter((word,index) => index%2==0 )
console.log(evenwords)

// Remove null and undefined 

let series = [1,2,null, 3, 7,undefined, 8]

const removeNull = series.filter(value => value !=null && value!=='');
console.log(removeNull)
