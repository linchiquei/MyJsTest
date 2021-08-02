const originAction = {
    hi:function(){
        console.log('hello')
    }
}

const heroAction = Object.create(originAction)
heroAction.att = function(){
    //console.log('att')
}

function heroCreate(name,action){
    let hero = Object.create(heroAction)
    hero.nmae = name
    hero.action = action
    return hero
}

const hero = heroCreate('f','at')
const womanhero = heroCreate('m','ar')
//hero.att();
//hero.hi();
//console.log(hero)
//all object has __proto__
//console.log(hero.__proto__ === heroAction)
//console.log(console.__proto__)
//console.log(hero.__proto__.__proto__)


function hiCreate(name){
    let hi = {}
    //hi.__proto__ = originAction; //不要這樣做
    hi.__proto__.hoho = function(){
        console.log('fdfd')
    }
    hi.name = name
    return hi
}
const c = hiCreate('gg')
const s = hiCreate('ss')
console.log(c.__proto__)
s.hoho()
c.hoho()