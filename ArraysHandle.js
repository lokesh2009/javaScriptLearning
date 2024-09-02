let fruits =['mango', 'banana','grapes'];

console.log(fruits[1]);

console.log(fruits.unshift("Straberry"));
console.log(fruits);

/* for(let i=0; i<fruits.length;i++){
    console.log(fruits[i]);
}

fruits.forEach(function(fruits){

    console.log(fruits);

}); */


console.log(fruits.pop());
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.indexOf("banana"));
console.log(fruits.slice(1,1));
console.log(fruits);

let upperfruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperfruits);

let greterThanfive = fruits.filter(fruit => fruit.length>5);
console.log(greterThanfive);

// Project 2 in Arrays


