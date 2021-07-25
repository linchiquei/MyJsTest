// const obj = {
//     "0":1,
//     "2":2,
//     "3":3
// }

// const o = [1,2,3,4,5]

// const b = o.filter(()=>{})
// console.log(b)

//closure
// function a(){
//     var x = 123
//     setTimeout(()=>{
//         console.log(x)
//     },3000)
// }
// a()
//output: 123


// const hero = {
//     name: "KKMan",
//     age:18,
//     state:"肚子餓",
//     eat:function(food){ console.log(`food is ${food}`); console.log('%s eat %s', this.name, food) }
// }
// hero.name = "pigpig"
// hero.eat("apple")

// hero.sayhi = function(){ console.log('hi') }
// hero.sayhi()

// function heroGent(name,action){
//     const att = function(){console.log('%s 使用 %s', this.name, this.action)}
//     return{
//         name, // can become name if key same as value
//         action:action,
//         attack:att
//     }
// }

// const h1 = heroGent("五條","領域展開")
// h1.attack()
// h1.name = "鳴人"
// h1.attack()

// const originAction  = {
//     sleep: function(){}
// }

// const heroActions = {
//     attack: function(){
//         console.log("打")
//     }
// }


// function heroCreator(name, action) {

//     const hero = Object.create(heroActions)
//     //原型 __proto__ = heroActions
    
//     hero.name = name
//     hero.action = action
//     return hero
// }

// const h1 = heroCreator("悟空", "龜派氣功")

// console.log(h1.__proto__)
// console.log(h1.__proto__.__proto__)
// console.log(h1.name)
// h1.attack()
// h1.greeting()
