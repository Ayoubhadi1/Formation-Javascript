// Filter   -   filtrer les élement du tableau , elle ne modifie pas le array de base    !!!!!!!!!!!!!
let ages = [5, 25, 50, 10, 7, 58];

let filtredAges = ages.filter(age => {
    return age >= 25       // arrow function en param de filtre doit retourner un boolean
})
//let filtredAges = ages.filter(age => age >= 25)


console.log(filtredAges)

let users = [
    { name : "Basma" , active: true},
    { name : "Walid" , active: false},
    { name : "Mohamed" , active: true},
    { name : "Yassine" , active: false},
    { name : "Mouad" , active: true}
]
let usersAyantSubString = users.filter( (user) => {
    return user.name.includes('as')
})
console.log(usersAyantSubString)

// Map  -   faire des modifications sur les valeurs , mais pas dans le array de base    !!!!!!!!!!!!!
let updatedAges = ages.map( (age) => {
    return age+10
})
//let updatedAges = ages.map(age => age + 10)
console.log(updatedAges)
let users2 = users.map((user , i) => {      //rendre le nom majuscule pour ceux qui ont active true
    if(user.active) {
        return {
            name: user.name.toUpperCase(),
            active: user.active
        }

    }else return user
})
console.log(users2)

// Reduce   -   accumuler un résultat de tous ses valeurs (somme ...) dans le param "acc"   !!!!!!!!!!!!!!!!
let result = ages.reduce((acc , age) => {
    return acc + age ;  //à chaque itteration , il retourn le résultat voulu dans le param "acc" , 0 initialisation de l'acc
} , 0)
console.log(result)

// Find     -   chercher des élements dans le tableau   !!!!!!!!!!!!!!!!!!
let result2 = ages.find((age) => {  // le premier élement supérieur à 30    (c-a-d une fois arrow fct retun true ,find return age)
    return age > 30
})
console.log(result2)

let result3 = users.find( user => user.name.toLowerCase().includes('moua'.toLowerCase()))    //return le premier user ayant name contient 'Moh' (arrow fct return true si name de user contient 'Moh')
console.log(result3)

// Sort     -   mettre en ordre le tableau original tab.sort()    !!!!!!!!!!!!!!!

//sorting the numbers
let ages2 = [5, 25, 50, 10, 7, 58];
//ages2.sort()  premier charactere par charactere 
// ages2.sort((a , b) => {
//     if(a > b)   return 1;    (return positif :substituer les emplacements)
//     else if(a < b) return -1;    (return negatif :laisser les emplacements tels quels)
//     else return 0;   (0 : meme chose)
// })

// ages2.sort((a , b) => {
//     if(a > b)   return -1;
//     else if(a < b) return 1;
//     else return 0;
// })

ages2.sort((a , b) => b-a);     //a-b => asc    ,   b-a => desc
console.log(ages2)

//sorting the strings
let persons = ['Basma' , 'Walid' , 'Ahmed' , 'Mohamed' , 'Yassine' , 'Mouad']
persons.sort()
console.log(persons)

// ENCHAÎNER les méthodes des Tableaux  !!!!!!!!!!!!!!!!!!!
// sélectionner seulement les nom des users qui sont actifs et qui ont une note supérieure ou égale à 10 et les afficher en ordre décroissant(note)
let usersEnch = [
    { name : "Basma" , active: true , note: 20},
    { name : "Walid" , active: false , note: 18},
    { name : "Mohamed" , active: true , note: 10},
    { name : "Yassine" , active: false , note: 9},
    { name : "Mouad" , active: true , note: 15}
]
let myUser2  = usersEnch.sort((a , b) => b.note - a.note)
                .filter( user =>  {return user.active && user.note >= 10})   //.filter( user =>  {return user.active && user.note >= 10})
                .map(user => user.name);

console.log(myUser2)

                