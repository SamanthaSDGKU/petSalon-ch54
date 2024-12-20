let pets = []; // empty array
//object literal
let petSalon = {
    name:"The Fashion Pet",
    address:{
        street:"Palm Ave",
        zip:"22333"
    },
    phone:"666-555-7777"
}

console.log(petSalon);

//creating the pets
let pet1 = {
    name:"Scooby",
    age:60,
    gender:"Male"
}
let pet2 = {
    name:"Scrappy",
    age:50,
    gender:"Male"
}
let pet3={
    name:"Tweety",
    age:70,
    gender:"Female"
}

pets.push(pet1,pet2,pet3);
console.log(pets);

function displayNames(){
    console.log(pets[0].name);
    console.log(pets[1].name);
    console.log(pets[2].name);

    console.log("We have " + pets.length + " pets");

}

displayNames();