/***
you have two numbers in two variables, called: num1, num2
now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 
also, write it using ternary operator.

 */
const num1 = 45;
const num2 = 25;
const result = num1 + num2;
if (num1 > num2) {
  const result = 2 * num1;
  console.log(result);
} else {
  const result = num1 + num2;
  console.log(result);
}
// tarnary short form
// num1 > num2 ? console.log(2 * num1) : console.log(num1 + num2);
