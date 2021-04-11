// function hello(){
//     console.log("Hello World");
// }
// hello();


// function sum(x,y){
//     return x+y;
// }
// let ans = sum(3,4);
// console.log(ans);

// //default parameter
// function sub(a,b,c=10){
//     console.log(a-b-c);
// }
// sub(2,3);

// function add(x,y){
//     let res = x+y;
//     console.log(res);
// }
// add(2,6);
// add("", 10);
// add([], 9);
// add(true, 4);
// add("Nikita",3);
// add('Nikita',6);

// console.log("Start");
// function d(){
//     console.log("Hello");
// }
// var b = 100;
// function a(){
//     d();
//     console.log(b);
// }
// a();


//-----Variable/Function Hosting------
// console.log(x);
// fun();
// function fun(){
//     console.log("Inside Function");
// }
// var x = 100;


//---------Store Function inside Variable-----
//b();   TypeError: b is not a function
// var b = function a(){
//     console.log("Hello World");
// }
// b();
//console.log(b);

// let b = function a(){
//     console.log("Hello World");
// }
// b();

//------Dead Temporal Zone-------
// console.log(x);
// z();
// function z(){
//     console.log("Inside Z");
// }
//let x = 100; //ReferenceError: Cannot access 'x' before initialization
//var x = 100;  //undefined Inside Z


//-----Higher Order Functions-----
//pass function as argument or return function
function fun(){
    function innerfun(){
        console.log("Inside Innner Function");
    }
    return innerfun;
}
let x = fun();
console.log(x);
x();

