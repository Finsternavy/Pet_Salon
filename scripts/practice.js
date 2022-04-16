

// console.log(student1.firstName);
// console.log(student2["lastName"]);
// console.log(student3.hobbies[1]); // display read
// console.log(student3.address.zip);
// console.log(student3["address"]["zip"]);

// challenge: create an object for a client with the
// attributes first name, last name, type of subscription,
// active or not, credits

// let client = {
//     firstName: "Chris",
//     lastName: "Finster",
//     subType: "Free",
//     isActive: true,
//     credits: 100
// };

// console.log(client.firstName, client['lastName'], client.subType, client.isActive, client.credits);
// console.log(client);

let studentArray = [
    {firstName: "Astrid",
    lastName: "Batres-Guerrero",
    age: 25,
    isActive: true
    },
    {firstName: "Anthony",
    lastName: "Lane",
    age: 22,
    isActive: true
    }, 
    {firstName: "Ben",
    lastName: "Vance",
    age: 25,
    isActive: false,
    hobbies: ["listen to music", "read", "Play Zelda"],
    address:{
        street: "Palm Street",
        zip: "86753",
        city: ""
        }
    }
];

console.log(studentArray[0], studentArray[1], studentArray[2]);

function displayStudent(){
    let temp = "";

    for(let i = 0; i<studentArray.length; i++){

        result = `<li>${studentArray[i].firstName}</li>`;
        document.getElementById("students").innerHTML += temp;
    }
} 
displayStudent();
