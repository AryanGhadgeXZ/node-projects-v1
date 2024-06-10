//Write a javascript program to accept as input  two numbers and return their addition

function add1(num1,num2){
    return num1 + num2;
}

let add2 = function (num1,num2){
    return num1 + num2;
}

let add3 = (num1,num2) => {
    return num1 + num2;
}

let add4 = (num1,num2) => num1 + num2;

console.log(add1(5,7));
console.log(add2(5,7));
console.log(add3(5,7));
console.log(add4(5,7));
