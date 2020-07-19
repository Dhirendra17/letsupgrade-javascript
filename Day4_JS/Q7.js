let input = Number(prompt('Enter a number'));
console.log('The prime numbers are:')
fun_Prime(input);
function fun_Prime(input)
{
    let i =2;
    let count,c=null;
    for(count=2;count<=input;)
    {
        for(c=2;c<=i-1;c++)
        {
            if(i%c==0)
            {
                break;
            }
        }
        if(c==i)
        {
            console.log(i);
            count++;
        }
        i++;
    }
}