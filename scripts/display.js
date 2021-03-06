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
            <div id="${pet.id}" class="pet-info">
                <div class="pet-name-header">
                    <h4>${pet.name}</h4><button onclick="deletePet(${pet.id});" class="delete-button"><i class="fa-solid fa-delete-left"></i></button>
                </div>
                <div class="pet-info-labels">
                    <label>Age: ${pet.age}</label>
                    <label>Gender: ${pet.gender}</label>
                    <label>Breed: ${pet.breed}</label>
                    <label>Service: ${pet.service}</label>
                    <label>Owner: ${pet.ownerName}</label>
                    <label>Phone: ${pet.contactNum}</label>
                    <label>Phone: ${pet.rewards}</label>
                </div>
            </div>
        `;
    }
    document.getElementById("pets").innerHTML = tmp;
}
// display the pets in a table

function displayTable(){
    let tableData = `
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Gender</th>
        <th>Breed</th>
        <th>Service</th>
        <th>Owner</th>
        <th>Phone</th>
        <th>Rewards?</th>
        <th>Delete</th>
    `;
    let table = $("#register-table");
    table.html("");
    table.append(tableData);
    for(let i = 0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        let row =`
            <tr id="${pet.id}">
                <td>${pet.id}</td>
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.ownerName}</td>
                <td>${pet.contactNum}</td>
                <td>${pet.rewards}</td>
                <td><button onclick="deletePet(${pet.id});" class="delete-button"><i class="fa-solid fa-delete-left"></i></button></td>
            </tr>
        `;
        table.append(row);
    }
}


