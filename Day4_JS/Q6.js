let user_Prompt = true;
let user_Ip = null;
let check = null;
let ifElse = null;
user_Ip = prompt("Enter a Number:- ");
while(user_Prompt){
    
    check = user_Ip == null ? true : false;
    user_Ip =Number(user_Ip);

    ifElse = (user_Ip > 100 || check) ? user_Prompt = false:userInput = Number(prompt("ENter A Number:- "));
   
}