// Creating data from localStorage
localStorage.setItem('name' , 'HADI Ayoub')
localStorage.setItem('age' , 23)

// Retreiving data from localStorage
let name = localStorage.getItem('name')
console.log(name)


//Updating data
localStorage.setItem('name','Hadi is updated')
name = localStorage.getItem('name')
console.log(name)


//Deleting data from storage

// localStorage.removeItem('name')
// name = localStorage.getItem('name')
// console.log(name)
localStorage.clear()    //supprimer tous les élements du local storage

//BSON = Binary Script Object Notation  (l'écriture qu'on traite dans notre code JS et de format BSON , par contre les données reçues ou envoyées sont de type JSON)
let users = [
    {name: "Basma", active: true, note: 20},
    {name: "Walid", active: false, note: 19},
    {name: "Mohamed", active: true, note: 9},
    {name: "Yassine", active: false, note: 14},
    {name: "Mouad", active: true, note: 15},
];

//stringify (convertir BSON to une chaine de caractere qui contient JSON)
localStorage.setItem('users',JSON.stringify(users))
console.log(users)

const usersStored = localStorage.getItem('users')
console.log(usersStored)    // une chaine de caractere qui contient du code JSON

console.log(JSON.parse(usersStored))    //JSON.parse convertir JSON to BSON , afin de pouvoir faire des traitement