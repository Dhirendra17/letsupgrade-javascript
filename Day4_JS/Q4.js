var z,result;
var x = Number(prompt('Type first number:'))
var y = Number(prompt('Type the second number:'));
var oper = prompt('Enter the operator you want like +,-,*,/,sqrt,%');
calci(x,y);
function calci(x,y){
if(oper=='+')
{
 z = x+y;
 result = console.log(`Addition is: ${z}`)
}
else if(oper =='-')
{
    z = x-y;
    result= console.log(`Subtraction is: ${z}`)
}
else if (oper== '*')
{
    z = x*y;
    result= console.log(`Multiplication is: ${z}`)
}
else if(oper == '/')
{
    z = x/y;
    result= console.log(`Division is : ${z}`);
}
else if(oper == 'sqrt')
{
    z = Math.sqrt(x);
    result= console.log(`Square root is: ${z} `);
}
else if (oper== '%')
{
    z = x/y*100;
    result = console.log(`Percentge is : ${z}`)
}
else{
    console.log('There is some eror in entries,Please check the note given on the site');
}
}
