//----Objects-----
//key-value pair
//collection of properties

const person = {
    firstname : "Nikita",
    lastname : "Narwal",
    age : 22,
    isAdult : true,
}
console.log(person);

// person.isAdult
// true
// person["firstname"]
// "Nikita"
// person["lastname"]
// "Narwal"
// person["first"+"name"]
// "Nikita"
// person
// {firstname: "Nikita", lastname: "Narwal", age: 22, isAdult: true}
// person.id = 202;
// 202
// person
// {firstname: "Nikita", lastname: "Narwal", age: 22, isAdult: true, id: 202}
// delete person.isAdult
// true
// person
// {firstname: "Nikita", lastname: "Narwal", age: 22, id: 202}