console.log('Q1')
n = Number(prompt('Enter a positive number here:'));
let input_arr = [];
for(let i=1;i<=n;i++)
{
   input_arr.push(i);
}
console.log(`The orignal array is: ${input_arr}`)
let updated_arr = input_arr.filter((n)=>n%2!==0).map((n)=>n**3)
console.log(`The cubes of odd elements is ${updated_arr}`);