
console.log("Start")

function longOperation(waitMs =2000){
    console.log("Waiting for", waitMS, "milliseconds");
    return new Promise((resolve, reject)=>{
        console.log("Async and await function starts");
        resolve(waitMs);
    },waitMS);
}

async function main(){
let resultPromise = longOperation(1000)

try{
    let result = await resultPromise;
    console.log("Result", result);
    let result2 = resultPromise
    console.log("Result", result2)
}catch(error){
    console.log("Error Produce", error);
}finally{
    console.log("All operation finished");
}
}

main()

console.log("End")