function displayName(firstName, lastName = "Kitty") {
    if(firstName === undefined || firstName === "")
    return console.log("請輸入名稱") 
    else {
        console.log(`${firstName} ${lastName}`)
    }
  }

  displayName("")
  displayName()



// function cTof(c){
//     f = c * 1.8 + 32;
//      return f;
// }
// console.log(cTof(34.0))

// const t = (c)=>{
//     return c * 1.8 + 32;
//  }
 
// console.log(t(30))






// for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 1);
  
// }
 
// function setTimeout(method, i){
//     // do something wait i sec ?
// }

// function A(){
//     console.log(i)
// }

// for (var i = 0; i < 3; i++) {
//     setTimeout(A, 1);
// }

// for (var i = 0; i < 3; i++) {
//     setTimeout(function(){ console.log(i) },i);
// }


// var b = 1
// function A(){
//     console.log(b)
//     var 
// }

// A()

// var a = 1
// function B(){
//     var a = 3
//     console.log(a)
// }
// B()

// var a = 1
// function hi(){
//     a = 2
// }
// hi()
// console.log(a) //方法hi會去找外部a 把a值變成a

// var a = "123"
// function A(){
//     var a = 4
//     function B(){
//         a = 3
//         console.log(a)
//     }
//     B()
//     console.log(a)
// }

// A()
// console.log(a)

// 3
// 3
// 123


// if(false){
//     var a=1
// }
// console.log(a)

// if(false){
//     let a=1
// }
// console.log(a)

// for(var i = 0; i<5; i++){

// }

// console.log(i)

// let hero = {
//     n: "k",
//     a: 18,
//     "my-student":"123"
// }

// console.log(hero.my-student)

// function A(){

//     if(true){
//         let a = 4
//     }

//     console.log(a)
// }

// A() 拿不到a






// var funcs = [];

// function create(){
//     for(let a = 0; a<3; a++){
//         funcs[a] = function(a){
//             console.log(a + "A");
//         }
//     }
// }

// create()
// docreate()

// function docreate(){
//     funcs[0](4)
// }

// var funcs = [];
// // let's create 3 functions
// for (var i = 0; i < 3; i++) {
//   // and store them in funcs
//   funcs[i] = function(a) {
//     // each should log its value.
//     console.log("My value: " + a);
//   };
// }
// for (var j = 0; j < 3; j++) {
//   // and now let's run each one to see
//   funcs[j](j);
// }

// function A(){
//     function B(){
//         console.log("B")
//     }
// }

// A()

// let b = 1
// function A(){
//     b = 3
// }

// A()
// console.log(b)

// function A(a,b){
//     console.log(a,b)
// }

// A(1,2,3)
