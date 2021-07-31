//3.使用 ()=>{} 沒有自己的this 也沒有 arguments 但有參數

// function a(){
//     console.log(arguments); //他是空array不會是undefined
// }
// a()

const hero = {
    name: "悟空", 
    sayMyName: function() {
      console.log("A", this);   // A


      setTimeout(function() {
        console.log("B", this);  // B
      }, 2000)
    }
  }
  
  hero.sayMyName()