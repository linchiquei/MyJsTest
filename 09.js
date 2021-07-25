function A(x,n){

    this.name = x + n

    function add(x,n){
        return x + n
    }

    return add(x,n)
}

var s = new A(1,2)
var h = A

console.log(h(1,2))
console.log(s)