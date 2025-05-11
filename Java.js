// document.addEventListener("DOMContentLoaded", function () {
//     const button = document.getElementById("button");
//     const demo = document.getElementById("demo");

//     button.addEventListener("click", function () {
//         demo.textContent = "Hello from Java.js!";
//     });
// });

const button = document.getElementById("button");

function showMessage() {
    console.log("Hello from Java.js!");
}
button.addEventListener("click", showMessage);

// const button = document.getElementById("button");
// button.addEventListener("click", function () {
//     console.log("Button clicked!");
// });

let a = ["js", "java", "python"];
let b = ["jsd", "jav", "python"];
console.log(a);
a.push("c++");
console.log(a);

//array methods

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const restult= fruits.find((f)=> f ==="Apple");
const restulta= fruits.findIndex((f)=> f ==="Apple");
const restults=fruits.filter((f)=> f ==="Apple"|| f ==="Mango");
const restultss=fruits.slice(2 ,4);
const restultsss=fruits.splice(1 ,2, "kiwi", "peach");

const ful = ["Banana", "Orange", "Apple", "Mango","Apple", "Mango"];
const numbers= ful.map((f)=> {
    if(f === "Apple"){
        return "Apple";
    }
    else{
        return "N/A";
    }
});
console.log("number of ful",numbers);

console.log("Array: ", fruits);
console.log("Filter: ", restults);
console.log("Find: ", restult);
console.log("FindIndex: ", restulta);
console.log("Slice: ", restultss);
console.log("Splice: ", restultsss);
console.log("Array: ", fruits);


// object 
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    eyeColor: "blue",
};
console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

// spread operator

const fruitss1 = ["Banana", "Orange", "Apple", "Mango"];
const restult1 =[...fruitss1];
console.log("restult1", restult1);
restult1.push("kiwi");
console.log("restult1", restult1);
console.log("fruitss1", fruitss1);

// rest 
function sum(...rest){
    return rest.reduce((a,b)=> a+b, 0);
}
console.log("sum", sum(1,2,3,4,5,4,3,2,1));
// destructuring
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const [a1, a2, a3, a4] = fruits1;
console.log("a1", a1);
console.log("a2", a2);
console.log("a3", a3);



function sum(text,...rest){
    const restul= rest.reduce((sum, cur)=> sum + cur, 0);
    console.log(`${text} ${restul}`);
}
sum("this sum is:", 1,2,3,4,5,6,7,8,9);

// tarnari oparetor 
const aValue = 6
const result = aValue %2==0 ? "Even" : "odd";

console.log("result: ", result);

// destructuring 
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    eyeColor: "blue",
};
const { firstName, lastName, age, eyeColor } = user;
console.log("firstName: ", firstName);