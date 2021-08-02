class Human{

    constructor(name, action){
        this.name = name
        this.action = action
    }
}

class Hero extends Human{ 
    attack(){
        console.log(`${this.name}`)
    }
    //eee = 333 //居然不會被當全域
}



let h = new Hero('2')
h.attack()
//console.log(h.eee)