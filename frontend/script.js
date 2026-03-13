function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user==="admin" && pass==="1234"){

localStorage.setItem("admin","true");
window.location.href="dashboard.html";

}else{

alert("Invalid Credentials");

}

}

function checkAuth(){

let admin=localStorage.getItem("admin");

if(admin!=="true"){
window.location.href="login.html";
}

}

function logout(){

localStorage.removeItem("admin");
window.location.href="login.html";

}

function analyzeRisk(){

let attendance=document.getElementById("attendance").value;
let gpa=document.getElementById("gpa").value;
let stress=document.getElementById("stress").value;

let risk=0;

if(attendance<75) risk++;
if(gpa<6) risk++;
if(stress==="High") risk++;

let result="Low Risk";

if(risk>=2) result="High Risk";
else if(risk==1) result="Medium Risk";

document.getElementById("result").innerText="Risk Level: "+result;

}
