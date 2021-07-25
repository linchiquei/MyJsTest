// Array.prototype.last = function () {
//     return this[this.length - 1];
// };

// console.log([1,2,3].last()) // 3 像是c#的extention


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.__proto__.sleep = function(){ console.log('sleep') } //會浩效能？
    //this.prototype.sleep = function(){ console.log('sleep') } 不行？ 因為 this 是物件不是 function
    //console.log(typeof this)
    this.ccc = function(){ return 123 }
    // return this.ccc 不要覆寫 return 值！被oject類物件複寫有效
  }
  
  Person.prototype.log = function() {  //不能使用匿名函式？
    console.log(this.name + ', age:' + this.age);
  }
  
  var nick = new Person('nick', 18);
  var peter = new Person('peter', 20);
  
  //console.log(nick.log === peter.log) // true
  console.log(nick)
  
  // 功能依舊跟之前一樣
  //nick.log(); // nick, age:18
  //peter.log(); // peter, age:20

  console.log(nick.__proto__.hasOwnProperty('log')); //true
  console.log(nick.hasOwnProperty('ccc')); //true