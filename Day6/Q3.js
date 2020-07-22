  
let name = prompt("Enter The Name:- ");  //User Input

let bodyBg = document.getElementById('bodyBg');
let Name = document.getElementById('name');
let Clock = document.getElementById('clock');
let btn = document.getElementById('btn');
//for user name
Name.innerText=`Welcome ${name}.`; 
//for enabling dark mode
btn.onclick =()=>{                          
 bodyBg.classList.toggle('bg');
}
//for displaying time
function clock(){           
    let date = new Date();
    let time = date.toLocaleTimeString();
    Clock.innerText=time;
}
setInterval(clock,1000)  //Live Clock