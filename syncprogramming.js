console.log("Start")

function longoperation(waitMS=2000){
    console.log("longOperation started")
        return new Promise(function(resolve, reject){
        }
        )
    setTimeout(function(){
        console.log("Long operation finished")
        resolve(100);
    })
}

let result =longoperation();
console.log(result)

result.then(function(result){
    console.log("result:", result)
    return result*2;
}).then(function(result2){
 console.log("result 2",result2)
}).catch(function(error){
    console.log("Something error jhappend",error)
})

console.log("End")