let gr = Number(prompt('Enter the marks you recieved out of 100',0))
//using conditional
grades(gr)
function grades(gr)
{
    if(gr>0 && gr<=20)
    {
        console.log('Your Grade is E ');
    }
    else if(gr>21 && gr<=40)
    {
        console.log('Your Grdae is D');
    }
    else if(gr>41&& gr<=60)
    {
        console.log('Your grade is C');
    }
    else if (gr>61 && gr<=80)
    {
        console.log('Your grade is B')
    }
    else
    {
        console.log('Congrats Your grade is A');
    }
}
//using Switch
switch (true) {
case gr >= 80:
        console.log("A");
        break;
    // If score is 80 or greater
    case gr >= 60:
        console.log("B");
        break;
    // If score is 70 or greater
    case gr >= 40:
        console.log("C");
        break;
    // If score is 60 or greater
    case gr >= 20:
        console.log("D");
        break;
    // Anything 59 or below is failing
    default:
        console.log("F");
}
//using ternary
   let result = (gr>80) ? 'Grade A': 
                 (gr>61 && gr<=80) ? 'Grade B':
                 (gr>41&& gr<=60)? 'Grade C':
                 (gr>21 && gr<=40)?'Grade D':
                  'Grade E';
     
     console.log(result);
     
