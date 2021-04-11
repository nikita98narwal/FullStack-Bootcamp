//----SLICE()-----
//max two arguments
let arr = [2,4,6,1,8,9,7];
console.log(arr);

// arr.slice();
// arr.slice(2,5);
// (3) [6, 1, 8]
// arr.slice(2)
// (5) [6, 1, 8, 9, 7]
// arr.slice(-4)
// (4) [1, 8, 9, 7]
// arr.slice(-4,-2)
// (2) [1, 8]
// arr.slice(7,3)
// [] //no output bcz always cut in forward direction and no swapping between indexes


//-----SPLICE()-----
//max three arguments
//splice(start_index, delete_count, [list])
let array = ['1', '3', '6', '8'];
console.log(array);

// array.splice();
// []
// array.splice(1,3);
// (3) ["3", "6", "8"]
// array
// ["1"]
// array.splice(0,0,["Nikita","Narwal"]);
// []
// array
// (2) [Array(2), "1"]0: (2)
//  ["Nikita", "Narwal"]1: "1"length: 2__proto__: Array(0)


//-------SPLIT()-------
let url = "https:my//website/blog/search/text.com";
console.log(url);

// url.split('/');
// (6) ["https:my", "", "website", "blog", "search", "text.com"]
// url.split('');
// (38) ["h", "t", "t", "p", "s", ":", "m", "y", "/", "/", "w", "e", "b", "s", "i", "t", "e", "/", "b", "l", "o", "g", "/", "s", "e", "a", "r", "c", "h", "/", "t", "e", "x", "t", ".", "c", "o", "m"]
// url.split(' ');
// ["https:my//website/blog/search/text.com"]

let fruits = ["Apple","Banana","Mango","Papaya"];
console.log(fruits);

// fruits.join('-');
// "Apple-Banana-Mango-Papaya"
// fruits.join("-->");
// "Apple-->Banana-->Mango-->Papaya"
// fruits.join(array);
// "Apple1,3,6,8 Banana1,3,6,8 Mango1,3,6,8 Papaya"


