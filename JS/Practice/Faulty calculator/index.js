// function add(a,b){
//     x=Math.random()
//     if(x<=0.1){
//         return a-b
//     }else{
//         return a+b
//     }
// }
// function sub(a,b)
// {
//     x=Math.random()
//     if(x<=0.1){
//         return a/b
//     }else{
//         return a-b
//     } a-b
// }
// function multiplex(a,b){
//     x=Math.random()
//     if(a<=0.1){
//         return a+b
//     }else{
//         return a*b
//     }
// }
// function divide(a,b){
//     x=Math.random()
//     if(x<=0.1){
//         return a**b
//     }else{
//         return a/b
//     }
// }


// c=add(1,2)
// console.log(c)



/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/




// second solution
let random = Math.random()
console.log(random)
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}



if (random > 0.1) {
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else {
    // Perform wrong calculation
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}