function toggleTheme(){
document.body.classList.toggle("dark");
}

function createDiv(){
let d=document.createElement("div");
d.className="box";
d.innerText="New Div Created";
document.getElementById("divContainer").appendChild(d);
}

function togglePara(){
let p=document.getElementById("para");
p.style.display = (p.style.display==="none") ? "block" : "none";
}

function changeFont(v){
document.getElementById("cssBox").style.fontSize = v+"px";
}

function changeRadius(v){
document.getElementById("cssBox").style.borderRadius = v+"px";
}

function changeBg(v){
document.getElementById("cssBox").style.background = v;
}

function changeText(v){
document.getElementById("cssBox").style.color = v;
}
