console.log("Q1");
let input = prompt("Enter a number to display the multiplication table : ");
document.write(`<h2>Table of ${input}<br></h2>`);
document.write("<ul>");
for(let i=1;i<=10;i++){
    document.write(`${input} x ${i} = ${input*i}<br>`);
}