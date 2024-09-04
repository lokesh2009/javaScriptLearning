


/*  
  Promise usage 
*/

console.log("Start operation")

function longOperaation(waitMS=2000){
 console.log("Long operation gets started");

   return new Promise(function(resolve, reject){

    setTimeout((function(){
        console.log("long operation finished ");
        resolve(100);
    }, waitMS))

 })
}

let returnNewPromise = longOperaation();
console.log(returnNewPromise);

returnNewPromise.then(function(result){
    console.log("result:", result);
    return result * 2;
}).then(function(result2){
    console.log("result2 :", result2);
})
console.log("end operations");