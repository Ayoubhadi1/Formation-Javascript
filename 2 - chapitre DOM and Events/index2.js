//DOM   -   Document Object Model
/*
window => Fenetre(scrolling , taille de la fenetre, contenu de la page (document) ...)
document => contenu de la fenetre
*/
//document
console.log(document)
console.log(document.getElementsByTagName('h1'))


// querySelector        -   récupérer un seul élement , si il y a plusieurs il récupére le premier 
// querySelectordAll    -   récupérer tableau d'élement             -   
const header = document.querySelector('.success')
const headerTab = document.querySelectorAll('.success')
console.log(header)
console.log(headerTab)
headerTab.forEach(par => { console.log(par)})

const pars = document.querySelectorAll('div.content > h2')  //h2 de la div dont la classe est "content"
pars.forEach( par => { console.log(par)})
//document.querySelectorAll('p.success') => paragraph dont la classe est "success"

//Get element by id
const header2 = document.getElementById('title')    // <==> document.querySelector('#title') 
console.log(header2)

//Get elements by class
const divisions = document.getElementsByClassName('content')
console.log(divisions)

//get elements by tag   -   retourn HTMLCollection et non pas un tableau, donc on peut pas y appliquer forEach , pour cela on utilise querySelector
const tags = document.getElementsByTagName('p')
console.log(tags)

// Changer le contenu(texte) d'un tag HTML à partir du JS
const header3 = document.querySelector('#title')
console.log(header3.innerText)  //header3 contient tout le tag
header3.innerText += " in Javascript bright coding" 

const headers2 = document.querySelectorAll('h2')
headers2.forEach(
    (data,index) => {
        data.innerText = "Mon titre "+ (index + 1)
    }
)

// Changer le contenu(texte) d'un tag HTML à partir du JS
const divMyContent = document.querySelector('.myContent')
console.log(divMyContent.innerHTML) //contenu HTML est non pas juste le texte
divMyContent.innerHTML += "<a href='http://google.com'>to google</a>"

// Changer le contenu de l'attribut d'un tag HTML à partir du JS
const anchorModAttr = document.querySelector('a#modifierAttr')
console.log(anchorModAttr.getAttribute('href')) //contenu de l'attribut href de cet anchor
anchorModAttr.setAttribute('href','https://facebook.com')
anchorModAttr.innerText = "link à changer de facebook"
//para.setAttribute('class','error')
anchorModAttr.setAttribute('style','color:red')   // => ajouter l'attribut style au tag avec un contenu dans style de l'anchor , mais cette méthode écrase l'ancienne valeur

//Changer le style css  ,   car setAttribut('style','....') écrase l'ancienne valeur
console.log(anchorModAttr.style)    //objet qui contient le style de l'élément
anchorModAttr.style.margin = '80px' // n'écrase pas les anciens
anchorModAttr.style.color = 'yellow'
anchorModAttr.style.fontSize = '100px'

anchorModAttr.style.color = ''  //annuler le style appliqué

// Ajouter ou supprimer une classe d'un Tag HTML
const paraClass = document.querySelector('#paraClass');
paraClass.classList.add('success2')
paraClass.classList.remove('success2')
paraClass.classList.add('error2')
//paraClass.classList.add('success2')
console.log(paraClass.classList)

const myTest = document.querySelectorAll('.test')
myTest.forEach(
    (para) => {
        if(para.innerText.includes('success')){
            para.classList.add('success2')
        }
        if(para.innerText.includes('error')){
            para.classList.add('error2')
        }
        console.log(para.classList)

    }
)

