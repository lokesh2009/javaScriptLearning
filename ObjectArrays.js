const objectsArray = [
    { id: 1, name: 'Rajesh', amount: 3000 },
    { id: 2, name: 'Ankit', amount: 1000 },
    { id: 3, name: 'Priya', amount: 2000 }
  ];
  
// Accessing Object
console.log(objectsArray[0]);

//Accessing Some property of Object
console.log(objectsArray[1]['amount'])

// Iterate over array
objectsArray.forEach(obj =>{
console.log(`Name : ${obj.name}, Amount : ${obj.amount}`);
});

// Manipulate Array
const SortedArray =[...objectsArray].sort((a,b)=>b.amount -a.amount)
//objectsArray.sort((a,b) =>a.amount - b.amount);
console.log(SortedArray)

 // Sort by Alphabecal order
 const sortByAlpha = [...objectsArray].sort((a,b)=>a.name.localeCompare(b.name))
 console.log(sortByAlpha);

 // Adding new Object
objectsArray.push({ id: 4, name: 'Vikas', amount: 1500 });
console.log(objectsArray);

// Removing array object
const newArray = objectsArray.filter(obj => obj.id !== 2);
console.log(newArray);

// Converting Arrays to set
let myArray =[23,2,34,12,45];
let convert = Array.from(myArray)
console.log(convert)

const myArray2 =[...mySet];