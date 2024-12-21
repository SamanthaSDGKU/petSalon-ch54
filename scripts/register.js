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
    gender:"Male",
    breed:"Dane",
    service:"Grooming"
}
let pet2 = {
    name:"Scrappy",
    age:50,
    gender:"Male",
    breed:"Mixed",
    service:"Vaccines"
}
let pet3={
    name:"Tweety",
    age:70,
    gender:"Female",
    breed:"Canarian",
    service:"Nails"
}

pets.push(pet1,pet2,pet3,pet1,pet2);
console.log(pets);

function displayNames(){

    for(let i=0;i<pets.length;i++){
        document.getElementById("petNames").innerHTML+=`<p> ${pets[i].name} </p>`;
    }

    document.getElementById("petsInfo").innerHTML="We have " + pets.length + " pets";

}

displayNames();