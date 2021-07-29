//construct
//class -> new -> instance （實體/實例）
class Human{
    // constructor(){
    // }
}

class Hero extends Human { //繼承

    constructor(name,action){
        //super()
        this.name = name,
        this.action = action
    }

    

    attack(){
        
        console.log('%s 使用絕招 %s', this.name, this.action)
    }

    // sleep(){
    //     console.log('sleep')
    // }
}

function Heroo(){
    this.attck = function(){}
    this.name = "234"
}

const h = new Hero("悟空","龜派氣功");
h.attack()
//console.log(h)
//console.log(h.__proto__ === Hero.prototype)

const c = Object.create(Heroo)
console.log(c)