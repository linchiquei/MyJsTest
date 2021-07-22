// const lists = [4,2,1,4,6,8,7]

// for (let i = 0; i < lists.length; i++) {
//     var num = lists[i]
//     lists[i] = num*2
// }
// console.log(lists);

// lists.forEach(function(value, index, array){
//     array[index] = value * 2;
//   });

//   console.log(lists)

// 對陣列中的每個元素做事情,並收集新的陣列

// function calMoreThan3(n){
//     if(n > 3){
//         n = n*3
//     }
//     return n
// }

// const res = lists.map(calMoreThan3)
// console.log(res)

// function getTotal(array){
//     var total = 0
//     array.forEach((x) => {
//         total = total + x
//     })
//     return total
// }

// console.log(getTotal(lists))

// let total = 0
// lists.forEach((x, index, array)=>{
//     total += x
// })
// console.log(total)

// lists.map(x=>{
//     console.log(x)
// })


// lists.forEach(x=>{
//     console.log(x)
// })

// const newlist = lists.filter(x=>{ return x>4})
// let total = newlist.reduce((a,c)=>{ return a = a + (c*c)},0)
// console.log(total)

// const heroes = [
//     { name: "悟空", power: 500 }, 
//     { name: "克林", power: 80 }, 
//     { name: "達爾", power: 450 }, 
//     { name: "18號", power: 700 }
//   ]

//   let total = heroes.reduce((a,c)=>{
//       return a + c['power']
//   },0)

//   let total = heroes.reduce((a,c)=>{
//     return a + c
// },0)


//   console.log(total)
  // 計算所有人的戰鬥力總和

// console.log(max)

// let max = 0
// heroes.forEach(x=>{
//     if(max < x.power){
//         max = x.power
//     }
// })
// console.log(max)

// let maxPower = 0
// let smallPower = 0

// maxPower = heroes.reduce((max,hero)=>{
//     if(hero.power > max){
//         return hero.power
//     }
//     else {
//         return max
//     }
// },heroes[0].power)

// console.log(maxPower)

// smallPower = heroes.reduce((min,hero)=>{

//     if(hero.power > min){
//         return min
//     }
//     else {
//         return hero.power
//     }
// }, heroes[0].power)

// console.log(smallPower)

const lists = [2, 4, 1, 8, 7, 3, 5]

// 實作...

const result = lists.filter(x=>x>4)
console.log(result)  // 印出 [ 8, 7, 5 ]

function greaterThan(n){
    return function(x){ return x > n }
}

function filterList(list,n){
    return list.filter(x=>x>n)
}

console.log(filterList(lists, 4)) 


