// 1. this is dnamic change
// important is who invole it!

// 1. 誰呼叫,誰就是this
// 2. 前面沒有人,this就是global

var name = '123'

function hello() {
    console.log(this.name);  // A
  
    function world() {
      console.log(this.name);  // B
  
      const game = {
        name: "Zelda", 
        greeting: function() {
          console.log(this);  // C
        }
      }
  
      game.greeting()
    }
  
    world()
  }
  
  hello()