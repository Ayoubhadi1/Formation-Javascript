class Car {

    //Attributs
    constructor(marque, hp, speed){
        this.marque = marque;
        this.hp = hp;
        this.speedMax = speed;
    }

    //Methods
    diagnostic(){   //tjrs utiliser la méthode classique , et non pas arrow function car this dans ce cas va pointer sur le document , ainsi on doit pas utiliser l'opérateur function car une fonction dans une classe s'appelle méthode et non pas function 
        return `This car ${this.marque} has ${this.hp} HP , and max speed ${this.speedMax}`
    }
}

let mercedes = new Car('mercedes benz' , 200, 150);
let bmw = new Car('bmw x6', 250, 400);
console.log(mercedes.diagnostic())
console.log(bmw)

//-------------Heritage
class SuperCar extends Car{

    constructor(marque, hp, speed, s, d){
        super(marque, hp, speed);
        this.spoiler = s;
        this.diffuser = d;
    }

    //Polymorphisme
    diagnostic(){
        return `This Super car ${this.marque} has ${this.hp} HP , and max speed ${this.speedMax}, and his diffuser on ${this.diffuser}`
    }

}
let myFerrari = new SuperCar('Ferrari', 840, 360, true, "Carbon fiber")
console.log(myFerrari.diagnostic())