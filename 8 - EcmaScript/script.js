// ...arg   (si on a plusieurs param , il doit étre le dernier)
const calcul = (...numbers) => {
    //return numbers.reduce((acc,number) => acc + number , 0 )
    return numbers.map(number => number * 2)
     
}

let result = calcul(4, 12, 4, 10, 20, 5)
console.log(result)

let [a, b, c, ...d] = result;
console.log(a, b, c, d)

//------------------------Spread operator   (injecter le contenu du tableau ou objet et non pas le tableau tout entier)
let names = ['Basma', 'Walid', 'Yassine', 'Mouad'];
let people = ['Kamal', 'Aymane'];

let names2 = ['Basma', 'Walid', 'Yassine', 'Mouad', ...people];

//let namesClone = [names, people]
let namesClone = [...names, ...people]; //spread operator

//Add new element in array
people = [...people, 'khadija']

console.log(namesClone);
console.log(names2)
console.log(people)

//meme pour les objets
let person = {
    name: "Mohamed IDBRAHIM",
    age: 35
}

let personClone = {
    ...person,
    adress: 'kenitra'
}
console.log(personClone)

//-----------------Sets class
//Set : une liste qui contient des élements uniques
let namesTab = ['Basma', 'Walid', 'Ayoub', 'Mouad','Walid']
let namesSet = new Set(namesTab);
// namesSet.add('Ayoub');
// namesSet.add('Anas').add('Amine');

// namesSet.add('Ayoub')
namesSet.delete('Basma')
console.log(namesSet.has('Walid'))
//namesSet.clear()
console.log(namesSet.size)
console.log(namesSet)


//----------------Double négation
let person2 = {
    name: "Mohamed IDBRAHIM",
    age: 35
}

// if(person2){
//     return true;
// }else{
//     return false;
// }

//let result2 = person2 ? true : false;

let result2 = !!person2;    //s'il existe return true , si null ou undefined ou chaine vide return false
console.log(result2)