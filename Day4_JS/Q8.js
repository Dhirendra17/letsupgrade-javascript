//Given Function
function ask (question,yes,no){
    if(confirm(question))yes()
    else no();
}
//using arrow fuction
ask(
    "Do you agree?",
    () =>{alert("You agreed.");},
    ()=>{alert("You canceled the execution.")},
);