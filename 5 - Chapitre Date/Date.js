// Date
let now = new Date()
console.log(typeof now)
console.log(now)
console.log(now.toDateString())
console.log(now.toTimeString())
console.log(now.toLocaleString())
console.log(now.getFullYear())
console.log(now.getMonth()) 
console.log(now.getDay())  //  dimanche =>0 , lundi => 1
console.log(now.getDate()) 
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())

//Timestamps    => entier (date actuelle par rapport à 1970)
console.log(now.getTime())  //nbr des milliseconde de 1 janv 1970 -> actuellement

// Différence entre les dates (using timestamps)        !!!!!!!!!!!!!!!!!!!!!!!!!
var before = new Date("2022-01-13");    //ISO
var d = new Date("03/25/2020");     //Short
var d = new Date("Mar 25 2020")     //long
var d = new Date("Sun Jan 16 2022 14:26:09 GMT+0000")
console.log(before.toLocaleString());  
let diff = now.getTime() - before.getTime();    //millisecond
console.log(diff)    

let seconds = diff / 1000;
console.log("Seconds : ",seconds)

let minutes = seconds / 60;
console.log("Minutes : ",minutes)

let hours = minutes / 60;
console.log("Hours : ",hours)

let days = hours / 24;
console.log("Days : ",days)
console.log("Avec arrondissement : ", Math.round(days) , "days")

// Créer une horloge en temps réel      !!!!!!!!!!!!!!!!!
const clock = document.querySelector('.clock')
const myOclock = () => {
    let now = new Date();
    let hour = now.getHours()
    let minute = now.getMinutes()
    let second = now.getSeconds()
    let html = `
        <span>${ hour } </span> :
        <span>${ minute } </span> :
        <span>${ second }</span>
    `
    clock.innerHTML = html;
}
setInterval(() => {
    myOclock()
}, 1000); //executer cette méthode chaque 1000 ms c-a-d 1s


// Librairies pour manipuler les Dates (par script , cdn , npm)!!!!!!!!!!!
// Date-fns     -   moyenne application
// moment.js    -   grande application  / très interessante
// luxon    -   lègere
// Day.js
console.log(dateFns.isToday(before))    //méthode de la biblio date-fns qui vérifie si la date donnée en param est d'aujourd'hui
console.log(dateFns.format(now,'YYYY'))
console.log(dateFns.format(now,'MMMM'))
console.log(dateFns.format(now,'MMM'))
console.log(dateFns.format(now,'MM'))
console.log(dateFns.format(now,'YY MM dd'))
console.log(dateFns.format(now,'YYYY MM dd'))
console.log(dateFns.format(now,'YYYY MM dddd'))

console.log(dateFns.differenceInHours(now,before))
console.log(dateFns.differenceInDays(now,before))




