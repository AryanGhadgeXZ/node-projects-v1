//write a program to find avg of 3 numbers

const prompt = require("prompt-sync")();
let n1 = parseFloat(prompt("Enter the first Number "));
let n2 = parseFloat(prompt("Enter the second Number "));
let n3 = parseFloat(prompt("Enter the third Number "));

let avg = (n1 + n2 + n3)/ 3;

console.log("Avg = " +avg.toFixed(2));