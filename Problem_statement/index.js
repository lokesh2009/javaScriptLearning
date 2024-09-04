const fetch = require("node-fetch");


function getUserName(username){
    let url = `https://api.github.com/users/${username}`
return fetch(url)
.then((resp) => resp.json())
.then((data) => console.log(data))
}

console.log("Result", getUserName("lokesh2009"))