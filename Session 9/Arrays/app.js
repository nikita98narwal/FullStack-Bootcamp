// let randomArray = [1,2,3,['a','b','c',["Nikita","Narwal"]]];
// undefined
// randomArray
// (4) [1, 2, 3, Array(4)]0: 11: 22: 33: (4) ["a", "b", "c", Array(2)]length: 4__proto__: Array(0)

// randomArray[3]
// (4) ["a", "b", "c", Array(2)]

// randomArray[2]
// 3

// randomArray[3][3];
// (2) ["Nikita", "Narwal"]

// randomArray[3][3][0];
// "Nikita"

let arr = [1,2,3,4];
console.log(arr);

//array methods
//basic methods
let fruits = ["Apple", "Litchi", "Mango"];
console.log(fruits);

//-----PUSH----
let pushedFruit = fruits.push('Strawberry');
console.log(pushedFruit);
console.log(fruits);

//-----POP--------
let poppedFruit = fruits.pop();
console.log(poppedFruit);
console.log(fruits);

//-----UNSHIFT-------
fruits.unshift("Papaya","Banana");
console.log(fruits);

//------SHIFT-------
fruits.shift();
console.log(fruits);

//-------CONCAT------
let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];
let arr3 = arr1.concat(arr2);
console.log(arr3);
let arr4 = arr2.concat(arr1);
console.log(arr4);

//--------includes-------
let a  = arr4.includes(9);
console.log(a);

let b = fruits.reverse();
console.log(fruits);n 






