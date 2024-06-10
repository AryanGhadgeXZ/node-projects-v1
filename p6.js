// Write a program to print the area and perimeter of rectangle

const prompt = require("prompt-sync")();

let l = parseFloat(prompt("Enter the Length : "));
let b = parseFloat(prompt("Enter the Breadth : "));

if ((l > 0.0) && (b > 0.0)){
    let area = l * b;
    let peri = 2 * ( l * b);
    let msg = "Area = " + area.toFixed(2) + " " + "Perimeter = " + peri.toFixed(2);
    console.log(msg);
}
else{
    console.log("invalid Data");
}

