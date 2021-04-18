//Callbacks
function fun(x){
    console.log(x);
    x();
}

function innerfun(){
    console.log('innerFun');
}

//here function is passed as an argument in another function
fun(function innerfun(){   
    console.log('InnerFunction');
});

//Array methods which accepts callbacks
//1. Map method
function square(num){
    return num*num;
}

let arr1 = [1,2,3,4];
let arr2 = arr1.map(square);

//callback method
//map(argument)  in argument we have put cube function as an argument
let arr3 = arr1.map(function(n,index){
    console.log(index);
    return n*n*n;
});

console.log(arr2);
console.log(arr3);

//2. Filter Method
let array = [1,2,3,4,5,6,7,8,9];
function isOdd(num){
    if(num %2 !== 0){
        return true;
    }
    return false;
}
let result = array.filter(isOdd);
console.log(result);