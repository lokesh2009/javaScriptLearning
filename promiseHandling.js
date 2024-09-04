
// There two ways to handle promise, one way create a callback function and use a promise on that
/* 
        And Another way 

*/

console.log("Start program")


function longoperation(waitMS =2000){
console.log("Waiting for", waitMS, "milliseconds");

return new Promise((resolve, reject) =>{
    setTimeout(function(){
        console.log("long operation completed");
        return resolve(waitMS)
    }, waitMS)
});
}

function smallopeartion(waitms= 1000){
    console.log("Small opeartion starts");

    return new Promise((resolve, reject) =>{
        setTimeout(function(){
            console.log("Small operation completion");
            return resolve(waitms)
        }, waitms)
    })
}


let resultPromise = longoperation(1000);
resultPromise.then((res)=>{
    console.log("Result", res);
    return res/2;
})
.then((res2)=>{
    console.log("Result2",res2);
})
.finally((res) =>{
    console.log("All operations finished")
})

console.log("End");