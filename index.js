//Write a JavaScript program that accept two integers and display the larger.

function larger(n1,n2) {
  if (parseInt(n1,10)>parseInt(n2,10))
{
  return console.log((n1)+ " is larger one.");
}
  else if (parseInt(n2,10)>parseInt(n1,10))
{
  return console.log((n2)+ " is larger.");
} 
  else if (parseInt(n1,10)===(parseInt(n2,10)));
{
  return console.log("The value "+(n1)+ " and " +(n2)+ " are equal.")
}
}
let num1 = prompt("Enter first Number: ");
let num2 = prompt("Enter Second Number: ");

console.log(larger(num1,num2));

