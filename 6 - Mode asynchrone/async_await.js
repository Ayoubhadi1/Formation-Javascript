// Async and await : si je veux travailler d'une manière bloquante

run();
async function run(){
    console.log('before')

    try {   // dans async await , on catch le reject en utilisant try catch

        let user = await getUser(10)    //await : attendre jusqu'à la récuperation du user , par la suite fait clg , await fonctionne obligatoirement dans une méthode async
        console.log("user là : ",user)  // deuxieme chose : on peut utiliser async await que si la méthode getUser returne une promise

        let products = await getProducts(user.id)
        console.log(products)

        //Communiquer avec une api rest (fetch c'est une api de JS qui envoie des requetes http)
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => console.log(posts))  //le retour du body de "response" = "res.json()" est de type "ReadableStream" donc c'est une promise , pour cela on a utilisé ce Then
            .catch(err => console.warn(err))
    } catch (error) {
        console.log(error)
    }
    

    console.log('between')
    console.log('after')
}
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