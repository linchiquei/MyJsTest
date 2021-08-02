//建構函數
function Hello(name){
    console.log('hi')
    this.name = name
    // this.att = function(){
    //     console.log('attack')
    // }
}



const h = new Hello('kk')

console.log(h.name)
console.log(h)
//h.abc = 123 不要這麼做沒有意義
console.log(h)

const s = new Hello('kk')
console.log(s)

Hello.prototype.attack = function(){
    console.log('attack')
}

// Hello.prototype = {
//     greet: function(){
//         console.log('greet')
//     }
// } //不要這麼做



s.attack()

function Graph() {
    this.vertices = [];
    this.edges = [];
  }
  
  Graph.prototype = {
    addVertex: function(v) {
      console.log('sdsd')
    }
  };
  
  var g = new Graph();
  var r = new Graph();
  g.addVertex()
  r.addVertex()

  console.log(h.__proto__ === Hello.prototype)

  let list = [1, 2,3,4,5]
  let array = new Array(1,2,3,4,5)
  
  console.log(array)

  //list = array
