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
function Pet(name,age,gender,breed,service,type){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
    this.type=type;
}
// create the variables for the HTML elements
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputType = document.getElementById("txtType");

function register(){
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputType.value); // create the new obj
    pets.push(newPet);//push the newpet into the array
    console.log(pets);// display the array

    displayRow();
    clearForm();
    displayTypes();
}

function clearForm(){
    document.getElementById("txtName").value="";
    document.getElementById("txtAge").value="";
    document.getElementById("txtGender").value="";
    document.getElementById("txtBreed").value="";
    document.getElementById("txtService").value="";
    document.getElementById("txtType").value="";

}

function deletePet(petId){
    console.log("Pet id:", petId);
    document.getElementById(petId).remove();
    pets.splice(petId,1);

    displayRow();
    displayInfo();
    displayTypes();
}

function init(){
    //create 3 pets
    let pet1 = new Pet("Scooby",60,"Male","Dane","Grooming","Dog");
    let pet2 = new Pet("Scrappy",50,"Male","Mixed","Vaccines","Cat");
    let pet3 = new Pet("Tweety",70,"Male","Canarian","Nails","Bird");
    
    pets.push(pet1,pet2,pet3);
    console.log("pets:", pets);

    displayRow();
    displayTypes();
}

window.onload=init;//wait to render the HTML
