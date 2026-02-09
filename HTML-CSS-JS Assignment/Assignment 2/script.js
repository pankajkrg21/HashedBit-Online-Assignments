function runAll(){

// Even numbers
let even="";
for(let i=1;i<=100;i++){
if(i%2===0){
even+=i+" ";
}
}
document.getElementById("even").innerText="Answer: " + even;


// Calculator

let a=Number(document.getElementById("num1").value) || 10;
let b=Number(document.getElementById("num2").value) || 5;
let op=document.getElementById("operation").value || "add";

let result;

switch(op){
case "add": result=a+b; break;
case "subtract": result=a-b; break;
case "multiply": result=a*b; break;
case "divide": result=b!==0 ? a/b : "Cannot divide by zero"; break;
}

document.getElementById("calc").innerText="Answer: " + result;


// Tax

let salary=Number(document.getElementById("salary").value) || 800000;
let tax=0;

switch(true){
case (salary>0 && salary<=500000):
tax=0;
break;
case (salary<=1000000):
tax=salary*0.10;
break;
case (salary<=1500000):
tax=salary*0.20;
break;
default:
tax=salary*0.30;
}

document.getElementById("tax").innerText="Answer: " + tax;


// Digit Product

let n1=Number(document.getElementById("n1").value) || 6;
let n2=Number(document.getElementById("n2").value) || 34;

let sum=0;

while(n1>0 || n2>0){
let d1=n1%10;
let d2=n2%10;
sum+=d1*d2;
n1=Math.floor(n1/10);
n2=Math.floor(n2/10);
}

document.getElementById("digit").innerText="Answer: " + sum;

}
