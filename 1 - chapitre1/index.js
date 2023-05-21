//Afficher un message dans la console

/* 
commentaire d'une paragraphe
*/
console.log("salam mes développeurs")
console.error("salam mes développeurs")
console.warn("salam mes développeurs")

//variables

//déconseillé car meme le var est déclaré en local (scope) on peut y acceder et le modifier dans n'importe quel endroit de code
var name = "Ayoub hadi";
if(name){
    var i = 1;
}
console.log(i);
// (le protéger dans un bloc de code) par contre si on déclare une variable avec let est considéré local
let age = 23;

// constante , interdit de modifier sa valeur d'initialisation
const pi = 3.14;

//non professionel
status = true;  

console.log(name , age , pi , status);

//String
let email = "ayoubhadi@gmail.com";
console.log(email);

//String concatenation
let firstName = "Ayoub";
let lastName = "Hadi";
let fullName = firstName + ' ' + lastName ;
console.log(fullName);

//Getting charcters
console.log(fullName[0]);

//String length
console.log(firstName.length);

//String methods
console.log(firstName.toUpperCase());
console.log(firstName.indexOf('y'));
console.log(email.lastIndexOf('i'))
console.log(email.slice(3,5))
console.log(email.substr(3,5))
//lastIndexOf , replace('i','f') => premiere occurrence avec f, replace(/i/g , 'f')=>toutes les i avec f 


//Numbers
console.log(100 * 'fhfh')

//Template strings
let course = 'Learn Javascript from scratch' ;
let instructor = 'Ayoub hadi';
let students = 200;

let result1 = 'Course name : '+ course + ' By '+instructor + ' has : ' + students;
console.log(result1);

let result2 = `Course name  : ${course} By ${instructor} has : ${students}`;
console.log(result2);

let content = `
    <h1> ${course}</h1>
    <p>Instructor : ${ instructor }</p>
    <em>students : ${ students }</em>
`
console.log(content);

//Arrays
let courses = ['angular' , 'react'];
console.log(courses);
courses[0] = 'android'; //override 
console.log(courses[0]);

let random = ['Angular' , 10 , true];
console.log(random);
console.log(courses.join(' - '));    //rendre le tableau sous forme de string avec l'ajout d'un délimiteur
console.log(courses.indexOf('android'));
random.push("SvelteJS");    //ajouter un element à la fin du tableau
console.log(random)
//random.pop();               //supprime le dernier element d'un tableau
console.log(random);    
random.unshift(2000);         //ajouter un element au début du tableau
console.log(random);  
random.shift();               //supprime le premier element d'un tableau    
console.log(random);  

//undefined & null
let currentYear ;
console.log(currentYear , currentYear + 1 , `This year is ${ currentYear}`);
let x7 = `${currentYear}`
console.log(x7.indexOf('u'))

let currentYear2 = null ;
console.log(currentYear2 , currentYear2 + 1 , `This year is ${ currentYear2}`); //null est considéré comme 0 dans les calculs

//True , false , comparaison
let email5 = "ayoubhadi@gmail.com";
console.log(email5.includes('@'));

let courses2 = ['angular' , 'react' , 'spring boot'];
console.log(courses2.includes('angular'));

// == , != , < , <= , > , >=
let name5 = "ayoub";
console.log(name5 == "ayoub");

//parse to number
let age5 = '35';
age5 = Number(age5);
//other type to string => String(variable)
//other type to boolean => Boolean(variable)
console.log(age5 + 1 , typeof age5);


//comparaison stricte   === (comparer la valeur anisi que le type si sont égaux) , !== (négation de ===)
let x = 35;
console.log(x == '35');     //(comparer la valeur si est égale)
console.log(x === 35);
console.log(x === '35');


//loops 
for(let i=0 ; i<5 ; i++){
    console.log(`itertion : ${ i }`);
}

let names5 = ['Angular' , 'React' , 'Android' , 'NodeJS'];
for(let i=0 ; i<names5.length ; i++){
    console.log(`Module ${ i+1 } : ${names5[i]}`);
}

let j = 0 ;
while (j<names5.length) {
    console.log(`module avec boucle while ${names5[j]}`);
    j++;
}

/*
    do{

    }while();
*/

// if , else if , || et && , ! , break et continue , switch case => les memes que java

//condition ternaire
let age55 = 17;
let result55 = (age55 >= 18) ? "Majeur" : "Mineur";
console.log(result55);

//Functions
// + Function declaration
function someThing(){
    console.log("print something with function declaration");
}
someThing();


// + Function expression    (appel de cette fonction doit se fait après la déclaration)
let some = function(){
    console.log('print something with function expression')
}

let some2 = function(sex='M' , name='Ayoub'){   //argument , on lui a affecté une valeur = optionnel
    console.log(`Hello ${ sex }. ${ name }`)
}

some();
some2('mons');

//return
const surfaceCercle = function(rayon){
    let surface = 3.14 * rayon ** 2;
    return surface;
}
let surface = surfaceCercle(3);
console.log(surface);

//Arrow function , avec un seul parametre , on peut annuler les parentheses : surfaceCercle2 = rayon => {}
const surfaceCercle2 = (rayon) => {
    return 3.14 * rayon ** 2;
}
// const surfaceCercle = rayon => return 3.14 * rayon ** 2      , si une seule instruction
// const surfaceCercle = rayon => 3.14 * rayon ** 2
console.log('with arrow function : '+ surfaceCercle2(3));

//callBacks - foreach   ,   foreach(-callBack-fonction anonyme)
let names = ['Ayoub' , 'Amine' , 'Ilyas' , 'Anas' , 'Simo' , 'Mouad'];

/*names.forEach(function(name){
    console.log(name);
})*/
//1
names.forEach((name , i)=>{
    console.log(i , name)
})

//2
const persons = (name , index) => {
    console.log(index , name);
}
names.forEach(persons);

let html = `` ;
const dev = (name , index) => {
    html += `<li>${index} : ${name }</li>`
}
names.forEach(dev)
let element = document.querySelector('.developers');
element.innerHTML = html ;

// Object
let user = {
    firstName: "ayoub",
    lastName: "hadi",
    age: 35,
    email: "ayouhbhadi@gmail.com",
    active: true,
    courses7: ["Angular", "ReactJS", "VuesJS"],
    login: function(){
        console.log('log with this user .')
    },
    logout: () => {
        console.log("logout with this user")
    },
    showCourses: () => {    //arrow function
        console.log(this) //pour acceder à un attribut à partir d'une méthode on utilise this ,
                                        //"this" fait réference à l'objet window , c-à-d le document sur lequel 
                                        //on pointe qui est index.js si on utilise arrow function
                                        // sinon la fonction anonyme classique , this pointe sur l'objet user
    },
    showCourses2: function(){   //classic function
        this.courses7.forEach((course) => {
            console.log(course)
        })
    },
    showCourses3(){     //simple function
        return this
    }
}
console.log(user.active)
user.email = "updated@gmail.com"
console.log(user)
console.log(user['age'])    //considérer l'object comme un tableau
user['age'] = 80;
console.log(user)
console.log(user.login())
console.log(user.logout())
user.logout()
console.log(user.showCourses())
console.log(user.showCourses2())
console.log(user.showCourses3())

// Créer des objets dans un tableau
let myCourses = [
    {title: "Angular" , price: 150},
    {title: "ReactJS" , price: 200},
    {title: "Flutter" , price: 180}
];
let tabObjects = {
    name: "ayoub",
    email: "ayoubhadi@gmail.com",
    tabCourses: myCourses,
    afficherCourses: function(){
        this.tabCourses.forEach(
            (course) => {
                console.log(course.title , course.price)
            }
        )
    }
}
console.log(tabObjects.afficherCourses())
tabObjects.afficherCourses()

