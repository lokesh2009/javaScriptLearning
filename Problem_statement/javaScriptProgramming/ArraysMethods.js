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

  // 2. Sort the array of objects by amount in decending order
  const sortedByAmountDecending = [...objectsArray].sort((a, b) => b.amount - a.amount);
  console.log("Sorted by decending amount :", sortedByAmountDecending);
  
  // 3. Sort the array of objects by name in alphabetical order
  const sortedByName = [...objectsArray].sort((a, b) => a.name.localeCompare(b.name));
  console.log("Sorted by name:", sortedByName);
  
  // 4. Print the amounts with INR label
  const formattedAmounts = amounts.map(amount => `INR ${amount}`);
  console.log("Formatted amounts:", formattedAmounts);
  
  