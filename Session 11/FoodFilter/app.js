//restaurant-->menu-->veg-->no chicken no egg
                    //Jain menu no onion no garlic

let menu = ["Paneer","Chicken","Dal Makhni",
"Dal Fry","Veg Briyani","Egg Roll",
"Egg Briyani","Rajma Chawal","Garlic Bread",
"Garlic Naan","Cholle Bhature","Onion RIngs",
"Chicken Changezi","Pizza","Zeera Rice",
"Chicken Roll"];

function isVeg(food){
    if(food.toLowerCase().indexOf('chicken') !== -1 || food.toLowerCase().indexOf('egg') !== -1){
        return false;
    }
    return true;
}

function isOnionGarlicFree(food){
    if(food.toLowerCase().indexOf('garlic') !== -1 || food.toLowerCase().indexOf('onion') !== -1){
        return false;
    }
    return true;
}

let vegMenu = menu.filter(isVeg);
let jainMenu = menu.filter(isOnionGarlicFree);


console.log(menu);
console.log(vegMenu);
console.log(jainMenu);