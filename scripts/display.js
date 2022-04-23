// display the pets in list items

function displayPet(){
    let tmp = "";
    for(let i = 0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        tmp += `<li>${pet.name} Age: ${pet.age}</li>`;
    }
    document.getElementById("pets").innerHTML = tmp;
}

// display the pets in cards

function displayCards(){
    let tmp = "";
    for(let i = 0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        tmp +=`
            <div class="pet-info">
                <h4>${pet.name}</h4>
                <div class="pet-info-labels">
                    <label>Age: ${pet.age}</label>
                    <label>Gender: ${pet.gender}</label>
                    <label>Breed: ${pet.breed}</label>
                    <label>Service: ${pet.service}</label>
                    <label>Owner: ${pet.ownerName}</label>
                    <label>Phone: ${pet.contactNum}</label>
                </div>
            </div>
        `;
    }
    document.getElementById("pets").innerHTML = tmp;
}
// display the pets in a table

function displayTable(){
    let tr = `
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Breed</th>
        <th>Service</th>
        <th>Owner</th>
        <th>Phone</th>
    `;

    for(let i = 0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        tr +=`
            <tr>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.ownerName}</td>
                <td>${pet.contactNum}</td>
            </tr>
        `;
    }
    document.getElementById("register-table").innerHTML = tr;
    console.log(tr);
}


