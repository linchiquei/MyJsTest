// var a = 0;

// function hello() {
//   a = 1;
//   b = 2;
//   var c = 3;
// }

// hello();

// console.log(a);
// console.log(b);  
// console.log(c); 

// var x = "there"

// function a(){
//     console.log(x)
// }

// function b(){
//     var x = "here"
//     a()
// }

// b()


// function bye (callback)
// {
//     if(typeof callback === 'function') //防呆機制
//     {
//         callback()
//     }
// }

// const cal = ()=>{ console.log('call') }

// bye(cal) // a callback

// let x = 3
// bye(x) 

// let x, y = (1, 2)

// console.log(x)
// console.log(y)

// const a = ()=>{
//     console.log('hello world')
// }

// setTimeout(a, 2000);

// setTimeout(function(){
//     console.log('hello world');
// }, 2000);

function printStars2(num){
    // let star =''
    // let space = ''
    // for(i = 1 ; i <= num ; i++ ){
    //     space = ' '.repeat(num-i)
    //     star = "*".repeat(i)
    //     console.log(space + star)
    // }


}

// function printStars2(num){
//     let star = ''
//     let space = ''
//     for(i = 1; i <= num; i++){
//         space = " ".repeat(num-i)
//         star = "*".repeat(i)
//         console.log(space + star)
//     }
// }


printStars2(100)

function printStars2(num){
    let star =''
    let space =''
    for (let i = 1; i <= num; i++) {
        space = ' '.repeat(num-i)
        star = '*'.repeat(2*i-1)
        console.log(space + star)
    }
}