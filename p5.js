// Write a program to print area and circumferance of a circle

const prompt = require("prompt-sync")();

let radius = parseFloat(prompt("Enter the Radius of the circle "));

if(radius != ""){
    const pi =3.14;
    let area = pi* radius ^ 2;
    let cir = 2 * pi * radius;
    let msg  = "Area = " + area.toFixed(2)+ " " + "Circumferance = " + cir.toFixed(2);
    console.log(msg);
}
else
{
    console.log("InValid Radius");
}