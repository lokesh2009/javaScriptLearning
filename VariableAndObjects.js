let name = 'Lokesh';
let age=43
let hasAndroidPhone=true;

let person={
     Name : name,
     Age : age,
    Has_Android_Phone : hasAndroidPhone

}

for(let key in person){
    console.log(`The type of value for key "${key}" is ${typeof person[key]}`);
}