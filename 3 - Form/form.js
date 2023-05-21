const form = document.querySelector('.my-form')
//username = document.querySelector('#username')
const feedback = document.querySelector('.feedback');
let pattern2 = /^[a-zA-Z0-9]{5,10}$/;

form.addEventListener('submit' , (e) => {
    e.preventDefault()  //annuler le refresh de la page
    //console.log(form.username.value)        //username : soit id ou name de l'input
    let username = form.username.value ;
    if(pattern2.test(username)){
        feedback.textContent = "This username is valid";
    }else{
        feedback.textContent = "Username must contains letters & be between 5 and 10 characters"
    }
})

//les expressions régulières
//  /mohamed/    => doit contenir mohamed 
//  /mohamed$/   => doit se terminer par mohamed 
//  /^mohamed/   => doit commencer par mohamed
//  /^mohamed$/   => doit commencer et terminer par mohamed 
//  /[agr]/      => la chaine doit contenir au moins a ou r ou g
//  /(bright|coding)/   =>  la chaine doit contenir soit bright ou coding
//  /[a-z]/     =>  doit contenir des alphas meme si contient aussi des digits
//  /^[a-z]$/     =>  doit contenir un seul alpha
//  /^[a-z]*$/   =>  doit contenir seulement des alphas 
//  /^[a-z]{5,10}$/   =>  doit contenir seulement des alphas min 5 , max 10
//  /^[a-z]{5,}$/   =>  doit contenir seulement des alphas min 5 , max indefini
//  /^[a-z]{5}$/   =>  doit contenir seulement 5 alphas 
//  /^[a-zA-Z]{5}$/   =>  doit contenir seulement 5 alphas , minuscule et majuscule
//  /^[a-zA-Z0-9]{5}$/   =>  doit contenir seulement 5 alphas , minuscule et majuscule , et les digits

// Appliquer pattern REGEX sur un contenu
let pattern = /^[a-z]*$/;

let username = "pp74Z"
console.log(pattern.test(username))
// if(pattern2.test(username)){
//     alert('Valid')
// }else{
//     alert('invalid')
// }

// Validation instantanée - keyup Event
const myUsername = document.querySelector('#username');
myUsername.addEventListener('keyup' , (e) => {
    //let username = e.target.value;
    let username = form.username.value;
    if(pattern2.test(username)){
        myUsername.setAttribute('class' , 'success')
        feedback.textContent= "This username is valid"
    }else{
        myUsername.setAttribute('class' , 'error')
        feedback.textContent = "Username must contains letters & be between 5 and 10 characters"
    }
})




