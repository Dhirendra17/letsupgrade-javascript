let num = Number(prompt('Enter a Number:',0))
console.log(`You have enetred ${num}`)
odd_even(num)
function odd_even(num)
{
 if(num%2==0)
 {
    let res= console.log(`The number ${num} is even`);
    return res;
 }
 else
 {
    let res= console.log(`The number  ${num} is odd`);
    return res;

 }
 console.log(res);
}
