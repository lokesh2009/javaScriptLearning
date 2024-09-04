
console.log("Start")

function longOperation(waitMs =2000){
    console.log("Long operation started");
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Async and await function starts");
            reject(100);
        },waitMs)  
    })
}

async function main(){
let resultPromise = longOperation(500);

try{
    let result = await resultPromise;
    console.log("Result", result);
    let result2 = resultPromise 
    console.log("Result", result2)
}catch(error){
    console.log("Some Error Produce", error);
}finally{
    console.log("All operation finished");
}
}

main()
console.log("End");