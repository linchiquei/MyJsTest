//建構函式
function Hello(name,action){
    //new做的事情
    //建立一個空物件
    //把 this->{}
    //把 this.__proto__ -> Hello.prototype(預設值為:{})
    //自動 return this
    this.name = name
    this.action = action
    // this.attack = function(){ console.log("攻擊！")  }
}

//所有物件都有 __proto__
//所有 function 都有 prototype 屬性
//預設 prototype 是空物件

//整個蓋掉別人的prototype
Hello.prototype = {
    attack:function(){ console.log('210') }
}
//在原本的prototype加一個attack功能
Hello.prototype.greeting = function(){
    console.log('2014')
}

//Hello.attack = function(){ console.log('打') }



const h = new Hello("pig",123)
Hello.rrr = function(){ console.log(123) }
h.sleep = function(){ console.log('230fi') }
// h.attack()
// h.sleep()
h.__proto__.www = function(){ console.log('3440') } //不要這樣用效能差
//h.www()

console.log(h)
//console.log(h.__proto__)
console.log(Hello)
//console.log(Hello.prototype)

const c = new Hello("123",456)

console.log(c)
