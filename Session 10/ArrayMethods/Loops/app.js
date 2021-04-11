for(i = 0; i < 10; i++){
    console.log(i);
}

for( j = 0; j < 10; j++){
    if(j==5){
        break;
    }
    console.log(j);
}


for(k = 0; k < 10; k++){
    if(k == 5){
        continue;
    }
    console.log(k);
}


//-----FOR-OF LOOP-----
let arr = ["A", "B", "C", "D", "E"]
for(let alpha  of arr){
    console.log(alpha);
}


//-----FOR-IN LOOP-----
//used for objects
let car = {
    name : "BMW",
    price : 200000,
    isDiskBrake : true,
}
for(let item in car){
    console.log(`${item}-->${car[item]}`);
}


//------WHILE LOOP-----
let numb = 10;
while(numb>=0){
    console.log(numb);
    numb--;
}


