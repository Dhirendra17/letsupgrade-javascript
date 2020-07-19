console.log('Q1')
let i=1;
for(i=1;i<=100;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log(`${i} fizzbuzz`);
    }
    else if(i%3==0)
    {
        console.log(`${i} fizz`);
    }
    else if (i%5==0)
    {
        console.log(`${i} buzz`);
    }
    else
    {
        console.log(`${i} is neither a multiple of 3 nor 5`);
    }
}