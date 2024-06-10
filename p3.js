// write a program to add two integers supplied by the user

const prompt = require ("prompt-sync")();

let n1 = parseInt(prompt("Enter first Integer"));
let n2 = parseInt(prompt("Enter Second Integer"));
let res = n1 + n2;
console.log("res = " + res);