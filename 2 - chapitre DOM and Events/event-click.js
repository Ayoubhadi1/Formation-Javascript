// Events => les événements
let btn = document.querySelector('button')
let ul = document.querySelector('ul')

btn.addEventListener('click' , () => {
    //ul.innerHTML += '<li> Something </li>'
    const li = document.createElement('li')
    li.textContent = "Do something !"
    li.style.color='red'
    ul.append(li)   // ajouter li à la fin de ul
    ul.prepend(li)  // ajouter li au début de ul
})

let items = document.querySelectorAll('li')

items.forEach(item => {
    item.addEventListener('click' , () => {
        console.log(item.innerText+" is clicked")
    })
});

items.forEach(item => {
    item.addEventListener('click' , (e) => {    //les infos de l'évenement déclenché
        console.log(e.target)
        e.target.style.textDecoration = "line-through"
        //item.style.textDecoration = "line-through"
    })
});


// Ajouter / supprimer un element DOM
items.forEach(item => {
    item.addEventListener('click' , (e) => {    //les infos de l'évenement déclenché
        console.log('I am LI')
        e.stopPropagation() //stoper la propagation vers l'élément parent
        //e.target.remove();  //item.remove()
    })
});

// Event propagation et delegation
ul.addEventListener('click' , (e) => {
    console.log('I am UL')
    //console.log(e.target)     //ul délegue le travail aux descendent (enfants)
})

// Autres events
// + evenement "copier"
const content = document.querySelector('.content')
content.addEventListener('copy' , () => {
    console.log('please my content is copyright !!')
})

const zone = document.querySelector('.zone')
const bord = document.querySelector('.bord')

zone.addEventListener('mousemove' , (e) => {
    bord.innerText = `X : ${ e.offsetX } - Y : ${ e.offsetY }`  //coordonnés par rapport la division
                                                                //coordonnés par rapport la page est : e.pageX , e.pageY
})
