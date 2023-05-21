let division = document.querySelector('div')
console.log(division)    
console.log(division.children)  
Array.from(division.children).forEach(  //fils de l'élement
    (element) => {
        console.log(element)
    }
)

console.log(division.parentElement)     //père de l'élement

console.log(division.nextElementSibling)    //autre élement dans le meme niveau (frère qui suit) 
console.log(division.nextElementSibling.previousElementSibling)    //autre élement dans le meme niveau (frère precedent) 

Array.from(division.children).forEach(  
    (element) => {
        element.classList.add('myClass')
    }
)


