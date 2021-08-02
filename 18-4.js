function attack(n) {
    console.log(`${n} ${this.name} 攻擊使用 ${this.action}`)
}

const hero = {
    name: '123',
    action: '456'
}

const heroAttack = attack.bind(hero) //把hero當this,return一個新的function

attack.call(hero, 1, 2) //直接呼叫attack函式,把this指向hero
attack.apply(hero, [1, 2])

heroAttack(1)