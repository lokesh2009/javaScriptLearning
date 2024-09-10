// Remove duplicate from soirtyed array

function removeDuplicate(sortedArray){
 let uniqArray=[];
 for(let i=0; i<sortedArray.length;i++){
    if(sortedArray[i]!==sortedArray[i+1]){
        uniqArray.push(sortedArray[i])
    }
 }
return uniqArray
}

const sortedArray=[1,2,2,3,4,4,4,5,6]
console.log(removeDuplicate(sortedArray))

let uniqueSoretdArray =[...new Set(sortedArray)]
console.log(uniqueSoretdArray)