function show(id,text){
document.getElementById(id).innerHTML="Answer: "+text;
}

function runAll(){

// Q1
let states=document.getElementById("statesInput").value.split(",");
let result1=states.filter(s=>!"aeiou".includes(s.trim()[0].toLowerCase()));
show("q1",result1);


// Q2
let str=document.getElementById("strInput").value;
show("q2",str.split(" ").reverse().join(" "));


// Q3
let word=document.getElementById("indiaInput").value.split("");
word.splice(3,0,"O","N","E","S");
show("q3",word.join(""));


// Q4
let text=document.getElementById("textInput").value;
let v=0,c=0;

for(let ch of text.toLowerCase()){
if("aeiou".includes(ch)) v++;
else if(ch>="a" && ch<="z") c++;
}

show("q4","vowels="+v+" consonants="+c);


// Q5
let sentence=document.getElementById("sentenceInput").value;
show("q5",sentence.replace("luv","love"));


// Q6
let inputArr=document.getElementById("arrInput").value.split(",").map(Number);
show("q6",inputArr.filter(n=>n>5));


// Q7
const students=[
{ name:"Ram", scores:[80,70,60] },
{ name:"Mohan", scores:[80,70,90] },
{ name:"Sai", scores:[60,70,80] },
{ name:"Hemang", scores:[90,90,80,80] }
];

let result7=students.map(s=>({
name:s.name,
average:s.scores.reduce((a,b)=>a+b,0)/s.scores.length
}));

document.getElementById("q7").innerHTML="<pre>"+JSON.stringify(result7,null,2)+"</pre>";


// Q8
function repeatedSum(num){
while(num>=10){
num=num.toString().split("").reduce((a,b)=>a+Number(b),0);
}
return num;
}
show("q8",repeatedSum(Number(document.getElementById("digitInput").value)));


// Q9
let para=document.getElementById("paraInput").value;
show("q9",para.trim().split(/\s+/).length);


// Q10
let rev=document.getElementById("revInput").value;
show("q10",rev.split("").reverse().join(""));


// Q11
let data={
student1:{subject1:44,subject2:56,subject3:87,subject4:97,subject5:37},
student2:{subject1:44,subject2:56,subject3:87,subject4:97,subject5:37},
student3:{subject1:44,subject2:56,subject3:87,subject4:97,subject5:37}
};

let result11={};

for(let key in data){
let vals=Object.values(data[key]);
result11[key]={average:vals.reduce((a,b)=>a+b,0)/vals.length};
}

document.getElementById("q11").innerHTML="<pre>"+JSON.stringify(result11,null,2)+"</pre>";

}
