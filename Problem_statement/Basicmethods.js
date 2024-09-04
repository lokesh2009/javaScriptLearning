// Try to load the url Install npm note-fetch@2, Use in gitIgnore

const fetch = require("node-fetch");


function getUserName(username){
    let url = `https://api.github.com/users/${username}`
return fetch(url)
.then((resp) => resp.json())
.then((data) => console.log(data))
}


function getFollowing(username){
    let url =`https://api.github.com/users/${username}\following`

return fetch(url)
.then((resp)=>resp.json())

}

function getFollowingRespositories(username){

    getUserName("lokesh2009")
    .then((users) =>{
     console.log(`the user ${username} is following ${users.following} users`)
     return getFollowings(username)
    }).then(followings)=>{
        console.log("Followings :",followings)
    }
}

getFollowingRespositories("lokesh2009")
//console.log("Result", getUserName("lokesh2009"))
//console.log("Get Following",getFollowing("lokesh2009"))