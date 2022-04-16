let petSalon =
    {salonName: "The Fashion Pet",
    address:{
        street: "787 Ave University",
        city: "Wichita",
        state: "KS",
        zip: "23456"
    },
    hours:{
        open: "9:00 a.m.",
        close: "8:00 p.m.",
        days: "Mon - Fri"
    },
    pets:[
        {
            name: "Scooby",
            age: 50,
            breed: "Dane",
            gender: "Male",
            service: "Grooming",
            ownsersName: "Shaggy",
            contactNumber: "555-555-5555"
        },
        {
            name: "Scrappy",
            age: 40,
            breed: "Mixed",
            gender: "Male",
            service: "Grooming",
            ownsersName: "Shaggy",
            contactNumber: "555-555-5555"
        },
        {
            name: "Ruffles",
            age: 8,
            breed: "Golden Retriever",
            gender: "Female",
            service: "Training",
            ownsersName: "Chris",
            contactNumber: "555-555-5555"
        },
        {
            name: "Deogi",
            age: 100,
            breed: "Dane",
            gender: "Female",
            service: "Training",
            ownsersName: "Max",
            contactNumber: "555-555-5555"
        }
    ]
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

onload = function numRegisteredPetsAlert(){
    alert(`There are ${petSalon.pets.length} pets registered.`);
}

