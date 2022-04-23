let petSalon =
    {salonName: "The Fashion Pet",
    address:{
        street: "787 University Ave",
        city: "Wichita",
        state: "KS",
        zip: "23456"
    },
    hours:{
        open: "9:00 a.m.",
        close: "8:00 p.m.",
        days: "Mon - Fri"
    },
    pets:[]
}

console.log(petSalon);

function displaySalonInfo(){
    document.getElementById("salon-info").innerHTML = `<p>${petSalon.address.street}</p>
    <p>${petSalon.address.city}, ${petSalon.address.state}, ${petSalon.address.zip}</p>
    <p>Hours: ${petSalon.hours.open} - ${petSalon.hours.close}</p>
    <p>${petSalon.hours.days}</p>
    `;
}
displaySalonInfo();

function displayPetsNames(){
    for(let i = 0; i < petSalon.pets.length; i++){

        document.getElementById("pets").innerHTML += `
        <li>${petSalon.pets[i].name}</li>
        `
        console.log(petSalon.pets[i].name);
    };

    
}
displayPetsNames();

// need to make this to catch up
class Pet {
    constructor(name, age, gender, breed, service, ownerName, contactNum) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.contactNum = contactNum;
    }
}


// need to make this to catch up
function register(){
    let pet = new Pet(
    document.getElementById("pet-name").value,
    document.getElementById("pet-age").value,
    document.getElementById("gender").value,
    document.getElementById("pet-breed").value,
    document.getElementById("service").value,
    document.getElementById("owner-name").value,
    document.getElementById("contact-phone").value
    );

    if(isValid(pet)){
        petSalon.pets.push(pet);
        console.log(petSalon.pets);
        //displayPet();
        //displayCards();
        displayTable();
        clearInputs();
        return;
    }
}

let pet1 = new Pet("Sparkles", 4, "M","dog", "Wash", "Chris", "555-555-5555");
let pet2 = new Pet("Lotto", 4, "F", "dog", "Wash", "Chris", "555-555-5555");
let pet3 = new Pet("Pups", 4, "M", "dog", "Wash", "Chris", "555-555-5555");
petSalon.pets.push(pet1, pet2, pet3);

function isValid(aPet){
    //return false when the pet is not valid
    //return true if the pet is valid
    let valid = true;
    if(aPet.name.length == 0){
        valid=false;
        alert("Invalid name. Name cannot be empty!");
    }
    if(aPet.age.length == 0){
        valid=false;
        alert("Invalid age. Age cannot be empty!");
    }
    if(aPet.gender.length == 0){
        valid=false;
        alert("Invalid gender. Gender cannot be empty!");
    }
    if(aPet.breed.length == 0){
        valid=false;
        alert("Invalid breed. Breed cannot be empty!");
    }
    if(aPet.service.length == 0){
        valid=false;
        alert("Please select a service!");
    }
    if(aPet.ownerName.length == 0){
        valid=false;
        alert("Invalid owner name. Owner name cannot be empty!");
    }
    if(aPet.contactNum.length == 0){
        valid=false;
        alert("Invalid contact number. Please enter a contact number!");
    }

    return valid;// true or fasle
}

//displayPet();
// need to make this to catch  up
function clearInputs(){
    document.getElementById("pet-name").value = "";
    document.getElementById("pet-age").value = "";
    document.getElementById("gender").value = "";
    document.getElementById("pet-breed").value = "";
    document.getElementById("service").value = "";
    document.getElementById("owner-name").value = "";
    document.getElementById("contact-phone").value = "";
}

displayCards();
displayTable();

onload = function numRegisteredPetsAlert(){
    //alert(`There are ${petSalon.pets.length} pets registered.`);
};

