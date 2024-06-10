//Write a javascript program to accept and input string and sort the string

const prompt = require("prompt-sync")();

let str = prompt("Enter your name ");

function mysort0(str){
    return str.split("").sort().join("");
}

let mysort1 = function (str){
    return str.split("").sort().join("");
}

let mysort2 = str => {
    return str.split("").sort().join("");
}

let mysort3 = str => str.split("").sort().join("");

console.log(mysort0(str));
console.log(mysort1(str));
console.log(mysort2(str));
console.log(mysort3(str));