//Promise (une classe prédéfinie en JS )
//then est déclenchée si le resolve est lancée dans l'implémentation, 
//  la méthode anonyme passée en param de then reçoit en param ce qui est passé chez reselve , et les utilise dans les instructions de cette méthode anonyme
//catch est déclenchée si le reject est lancée
console.log('before')
getUser(10)
    .then((user) => {
        console.log(user)
        return getProducts(user.id)     //un autre promise , qui va se traité dans le prochain Then
    })
    .then(products => console.log(products))   //then de getProducts 
    .catch((err) => console.warn(err))
// Dans les promises , on a le parallelisme des Then , et non pas l'imbrication

console.log('between')
console.log('after')

function getUser(id){
   return new Promise((resolve , reject) => {
        let status  = true;
        setTimeout(() => {
            console.log('retreive data from database')
            if(status){
                return resolve({ id : id , name : "Mohamed Idbrahim"})
            }else{
                return reject("user not found !!")
            }
    },2000)

    })
    
}

function getProducts(userId){
    return new Promise((resolve , reject) => {
         let status  = true;
         setTimeout(() => {
             console.log('retreive products from database')
             if(status){
                 return resolve(['p1' , 'p2'])
             }else{
                 return reject("products not found !!")
             }
     },2000)
 
     })
     
 }

// function getProducts(idUser){
//     setTimeout(() => {
//         console.log('retreive Products from database')
//         return ['p1' , 'p2']
//     },2000)
// }

// let p = new Promise((resolve , reject) => {
//     let status = true;

//     if(status){
//         resolve("ok")
//     }else{
//         reject("ok")
//     }
// })

// p.then(res => console.log(res))
//  .catch(err => console.error(err))