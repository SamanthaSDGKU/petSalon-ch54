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

//constructor (add the breed and service)
function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}
// create the variables for the HTML elements
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function register(){
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value); // create the new obj
    pets.push(newPet);//push the newpet into the array
    console.log(pets);// display the array
}

function init(){
    //create 3 pets
    let pet1 = new Pet("Scooby",60,"Male","Dane","Grooming");
    let pet2 = new Pet("Scrappy",50,"Male","Mixed","Vaccines");
    let pet3 = new Pet("Tweety",70,"Male","Canarian","Nails");
    
    pets.push(pet1,pet2,pet3);

}
window.onload=init;//wait to render the HTML