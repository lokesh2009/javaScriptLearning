/* Create an array containing the following 3 elements:

your favorite color
the number of pets you have
a boolean value describing whether you have previous programming experience */

/*
Shift removes first element from array
pop removes last element from array
push added last element in array
unshift added first element in array
*/

let fav_colour = "Green";
let number_of_pets =2;
let previous_prog_exp=false;

let MyArray=[fav_colour,number_of_pets,previous_prog_exp];
console.log(MyArray);

console.log('My favorite color is', fav_colour);
console.log(`I have ${number_of_pets} pet(s).`);

if(previous_prog_exp){
    console.log("I have expereince");
               }
    else{
        console.log("I dint have ");
    }
   
    console.log(" Add your favorite single digit number to the end of the array using the appropriate array method.")
    MyArray.push(9);
    console.log(MyArray);

    console.log("Remove the first element of the array, using the appropriate array method.")
    MyArray.shift();
    console.log(MyArray);

    console.log(" Complete the console.log statement below to display the number of elements in myArray")
    console.log(`The array has ${MyArray.length} elements.`)

    console.log(" Added specific poistion element in array")
   
    console.log("****************************************************************************************************************************")
    console.log("Q10: Calculate and display the sum of all the numbers divisible by 7 between 18 and 534 i.e. 21+28+35+...+525+532")

    let sum =0;
   for(let i =18 ; i<=534; i++){
  
    if(i%7==0){
        console.log(sum=sum+i);
    }
   }
   console.log('The sum of all the numbers divisible by 7 between 18 and 534 is',sum)