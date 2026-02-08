function runAll(){

// Q1
document.getElementById("a1").innerText =
"var = function/global scope\nlet = block scope\nconst = block scope + cannot reassign";

// fruits
let fruits=document.getElementById("fruitInput").value.split(",");

// Q2
document.getElementById("a2").innerText =
"Second fruit: "+ fruits[1];

// Q3
let arr=[...fruits];
arr.push("NEW");
arr.pop();

document.getElementById("a3").innerText =
"Push + Pop result: "+ arr;

// numbers
let numbers=document.getElementById("numberInput").value.split(",").map(Number);

// Q4
document.getElementById("a4").innerText =
"Squared numbers: "+ numbers.map(n=>n*n);

// Q5
document.getElementById("a5").innerText =
"Odd numbers: "+ numbers.filter(n=>n%2!==0);

// Q6
let person={name:"Pankaj",age:23,occupation:"Student"};

document.getElementById("a6").innerText =
"Hello I am "+person.name+" ("+person.occupation+")";

// Q7
let width=document.getElementById("widthInput").value;
let height=document.getElementById("heightInput").value;

document.getElementById("a7").innerText =
"Rectangle area: "+ (width*height);

// Q8
document.getElementById("a8").innerText =
"Object keys: "+ Object.keys(person);

// Q9
let merged=Object.assign({}, {a:1},{b:2});

document.getElementById("a9").innerText =
"Merged object: "+ JSON.stringify(merged);

// Q10
let reduceNumbers=document.getElementById("reduceInput").value.split(",").map(Number);

document.getElementById("a10").innerText =
"Sum using reduce: " +
reduceNumbers.reduce((total,n)=> total+n,0);

}
