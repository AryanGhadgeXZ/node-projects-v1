// Write a java scropt program to ask for the name of the use and den welcome

const prompt = require("prompt-sync")();

let name = prompt("Enter your Name ");
let msg = "Welcome " + name;
console.log(msg);
