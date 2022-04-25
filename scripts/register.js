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

let c = 0; // counter for id
class Pet {
    constructor(name, age, gender, breed, service, ownerName, contactNum, rewards) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.ownerName = ownerName;
        this.contactNum = contactNum;
        this.rewards = rewards;
        this.id = c++;
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
    document.getElementById("contact-phone").value,
    document.getElementById("rewards").value
    );

    if(isValid(pet)){
        petSalon.pets.push(pet);
        console.log(petSalon.pets);
        //displayPet();
        displayCards();
        displayTable();
        clearInputs();
        return;
    }
}

let pet1 = new Pet("Sparkles", 4, "M","dog", "Wash", "Chris", "555-555-5555", "No");
let pet2 = new Pet("Lotto", 4, "F", "dog", "Wash", "Chris", "555-555-5555", "Yes");
let pet3 = new Pet("Pups", 4, "M", "dog", "Wash", "Chris", "555-555-5555", "No");
petSalon.pets.push(pet1, pet2, pet3);

function isValid(aPet){
    //return false when the pet is not valid
    //return true if the pet is valid
    let valid = true;
    if(aPet.name.length == 0){
        valid=false;
        alert("Invalid name. Name cannot be empty!");
        return;
    }
    if(aPet.age.length == 0){
        valid=false;
        alert("Invalid age. Age cannot be empty!");
        return;
    }
    if(aPet.gender.length == 0){
        valid=false;
        alert("Invalid gender. Gender cannot be empty!");
        return;
    }
    if(aPet.breed.length == 0){
        valid=false;
        alert("Invalid breed. Breed cannot be empty!");
        return;
    }
    if(aPet.service.length == 0){
        valid=false;
        alert("Please select a service!");
        return;
    }
    if(aPet.ownerName.length == 0){
        valid=false;
        alert("Invalid owner name. Owner name cannot be empty!");
        return;
    }
    if(aPet.contactNum.length == 0){
        valid=false;
        alert("Invalid contact number. Please enter a contact number!");
        return;
    }
    if(aPet.rewards.length == 0){
        valid=false;
        alert("Please elect to enroll in rewards or decline.")
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
    document.getElementById("rewards").value = "";
}

function deletePet(petId){
    console.log("Deleting.." + petId);
    // in this function ------------
        // travel the array
        for(let i = 0; i<petSalon.pets.length; i++){
            let pet = petSalon.pets[i];
            if(petId == pet.id){
                let deleteIndex = i;
                petSalon.pets.splice(deleteIndex, 1);
            }
        }
        document.getElementById(petId).remove();
        displayCards();
}

function searchPet(){
    
    let search = document.getElementById("search-box").value;
    document.getElementById("search-box").value="";
    search = search.toUpperCase();

    console.log("Searching: " + search);

    for(let i = 0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        
        if(search === pet.name.toUpperCase() ||
            search == pet.age ||
            search === pet.gender.toUpperCase() ||
            search === pet.breed.toUpperCase() ||
            search === pet.service.toUpperCase() ||
            search === pet.ownerName.toUpperCase() ||
            search === pet.contactNum.toUpperCase()){
                console.log("Found it");
                document.getElementById(pet.id).classList.add("highlight");
                // get all td's in the table
                let tds = document.querySelectorAll("#register-table td");
                // search for the desired text in each td inner html
                for(let i = 0; i < tds.length; i++){
                    if(tds[i].innerHTML.toUpperCase() == search){
                        console.log(tds[i].innerHTML);
                        // add the highlight class to that td
                         tds[i].classList.add("highlight");
                    }else{
                        // remove the highlight class from cells that do not match the search
                        tds[i].classList.remove("highlight");
                    }
                }
        }else{
            document.getElementById(pet.id).classList.remove("highlight");
            // remove old selections in the table.  this is a little glitchy.
            let tds = document.querySelectorAll("#register-table td");
                for(let i = 0; i < tds.length; i++){
                    if(tds[i].innerHTML.toUpperCase() !== search){
                         tds[i].classList.remove("highlight");
                    }
                }
        }
    }
}

displayCards();
displayTable();

onload = function numRegisteredPetsAlert(){
    //alert(`There are ${petSalon.pets.length} pets registered.`);
};

