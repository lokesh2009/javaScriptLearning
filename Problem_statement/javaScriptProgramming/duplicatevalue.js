
const check_duplicate_in_array=(input_array)=>{
    const duplicates =input_array.filter((item, index) =>input_array.indexOf(item) !== index);
    return Array.from(new Set(duplicates));
}


let duplicate_value =(input_array)=>{
    let duplicate_elements =[];
    for(num in input_array){
        for(num2 in input_array){
            if(num===num2){
                continue;
            }
            else {
                if(input_array[num]===input_array[num2]){
                    duplicate_elements.push(input_array[num])
                }
            }
        }
    }
     return [...new Set(duplicate_elements)];
}

// use single loop
let check_duplicate_in_arra = (input_array) => {
    let duplicate_elements = [];
    for (element of input_array) {
        if (input_array.indexOf(element)
            !== input_array.lastIndexOf(element)) {
            duplicate_elements.push(element);
        }
    }
    return [...new Set(duplicate_elements)];
}


const arr =[1,1,2,2,3,3,4,5,6,1,4]
console.log(check_duplicate_in_array(arr));
console.log(duplicate_value(arr));
console.log(check_duplicate_in_arra(arr));