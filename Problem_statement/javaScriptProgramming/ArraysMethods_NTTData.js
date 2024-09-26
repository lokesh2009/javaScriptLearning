let arr = ['Sunny', 'ram','Prabhu']
let result = arr[arr.length -1]
console.log(result)

// Sort the Array Object
/*
Get amount from above object
Sort the amount in ascending order
sort object based on Name
print amount with INR(for example INR 2000)

*/
const objectsArray = [
    { id: 1, name: 'Sunny', amount: 3000 },
    { id: 2, name: 'Pinky', amount: 1000 },
    { id: 3, name: 'Raju', amount: 2000 }
  ];
  
  // 1. Extract the amount values
  const amounts = objectsArray.map(obj => obj.amount);
  console.log("Extracted amounts:", amounts);
  
  // 2. Sort the array of objects by amount in ascending order

  const sortedByAmount = [...objectsArray].sort((a, b) => a.amount - b.amount);
  console.log("Sorted by amount:", sortedByAmount);
  [...objectsArray].

  // 2. Sort the array of objects by amount in decending order
  const sortedByAmountDecending = [...objectsArray].sort((a, b) => b.amount - a.amount);
  console.log("Sorted by decending amount :", sortedByAmountDecending);
  
  // 3. Sort the array of objects by name in alphabetical order
  const sortedByName = [...objectsArray].sort((a, b) => a.name.localeCompare(b.name));
  console.log("Sorted by name:", sortedByName);
  
  // 4. Print the amounts with INR label
  const formattedAmounts = amounts.map(amount => `INR ${amount}`);
  console.log("Formatted amounts:", formattedAmounts);

  // Call back hell
  setTimeout(function () {
    console.log("Step 1");
    setTimeout(function () {
        console.log("Step 2");
        setTimeout(function () {
            console.log("Step 3");
        }, 3000)
    },1000)
  }, 1000)


  // Callback hell problem solution comes with Promise and Async await
  //Promises provide a cleaner way to chain asynchronous operations without deeply nesting callbacks.
  // Instead of passing callbacks, Promises return an object representing the eventual completion or failure of an asynchronous operation

  function step1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Step1");
            resolve();
        }, 1000)
    });
  }

  function step2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Step2");
            resolve();
        },1000)
    })
  }
// Help chaing of element
  step1().then(step2).catch((error)=>console.error(error));

//The async/await syntax provides a more synchronous style of writing asynchronous code, 
//which is easier to read and avoids the pyramid of nested callbacks.

async function executeSteps(){
    try{
        await step1;
        await step2;
        await step3;
    }catch(error){
        console.error(error);
    }
}

executeSteps()

// Example of falsy Values 

const values = [false, 0, "", null, undefined, NaN];

values.forEach(value => {
  if (!value) {
    console.log(`${value} is falsy`);
  }
});


//2 - In JavaScript, you cannot have function overloading like in some other programming languages
function print(){
  console.log('hi');
  }
   
  print();
   
  function print(name){
    console.log(name);
  }
   
  function print(name,age){
    console.log(`hi i'm ${name} and ${age} year old`);
  }
   
  function print(name,age,dob){
    console.log(`hi i'm ${name} and ${age} year old and my dob ${dob}`);
  }
   
  print('ramesh',29,'1995');