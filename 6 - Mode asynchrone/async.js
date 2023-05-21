// console.log('before')
// setTimeout( () => {console.log('retreive data from database') , 2000})
// console.log('between')
// console.log('alter')


//------------------ Problème du asynchrone par défaut
// console.log('before')
// let user = getUser(10);
// console.log(user)

// console.log('between')
// console.log('after')

// function getUser(id){
//     setTimeout(() => {
//         console.log('retreive data from database')
//         return { id : id , name : "Mohamed Idbrahim"}
//     },2000)
// }


//-----------------CallBacks (callBack : une méthode qui se passe en dernier param de n'importe quelle méthode JS, et on peut lui passer plusieurs param)
// Problème des callBacks c'est l'imbrication (intérieur d'un callBack, on déclenche l'autre méthode, ce qui rend la maintenance difficile)
console.log('before')
getUser(10 , (user) => {
    console.log("my user : ",user)
    getProducts(user.id , products => console.log(products))
});


console.log('between')
console.log('after')

function getUser(id , callback){
    setTimeout(() => {
        console.log('retreive data from database')
        return callback({ id : id , name : "Mohamed Idbrahim"})
    },2000)
}

function getProducts(idUser , callback){
    setTimeout(() => {
        console.log('retreive Products from database')
        return callback(['p1' , 'p2'])
    },2000)
}

//-----------------Promises
