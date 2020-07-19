console.log('Calculation for Commision');
let sales = Number(prompt('Enter your sales for the year:'))
let comm,comm_percent=null;

if(sales>0 && sales <=5000)
{
    comm_percent=2;
    comm = sales*(comm_percent/100);
}
else if (sales>5001 && sales<=10000)
{
    comm_percent=5;
    comm = sales*(comm_percent/100);
}
else if (sales>10001 && sales<=20000)
{
    comm_percent=7;
    comm = sales*(comm_percent/100);
}
else if (sales>20001)
{
    comm_percent=10;
    comm = sales*(comm_percent/100);
}
console.log(`Dear employee your sales in this year were ${sales} , so your commision percentage is ${comm_percent}% and hence your commision for the year is ${comm} `);
