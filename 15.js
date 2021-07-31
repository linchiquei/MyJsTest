//3. 是否有使用bind / call / apply

function att(x,y,z){
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(`${this.name} ${this.action}`)

    this.name = '456'
}

const hero = {
    name:'123',
    action:'烏拉拉'
    
}

const heroAtt = att.bind(hero)
// bind = return 一個新的 function
heroAtt(1,2,3)

// att.call(hero,1,2,3) //直接呼叫 沒有產生新的function
// att.apply(hero, [1,2,3])

console.log(hero)
att()
console.log(hero)
console.log(this)


