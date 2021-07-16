// 檢查傳入的引數是否為某數的平方

// function isSquare(num) {
//     return Number.isInteger(Math.sqrt(num));
//   }
  
//   console.log(isSquare(0))   // 引數// 印出 true
//   console.log(isSquare(4))   // 印出 true
//   console.log(isSquare(5))   // 印出 false
//   console.log(isSquare(25))  // 印出 true
//   console.log(isSquare(26))  // 印出 false

//   function printStars(n) {
//       let star = ''
//     for(var i = 0; i < n ; i++){
//         star = star + " *"
//         console.log(star)
//     }
//   }
  
//   printStars(6)

function Start(num){
    let star = ''
    for(var i = 0; i < num ; i++){
            star = "*".repeat(i)
            console.log(star)
    }
}

Start(8)