let a = 10
function ww(){
   
    let b = 20

    if(b==20){
        let ser = 3;
    }


    function www(){
        let c = 30
        function wwww(){
            let d = 40
            console.log(a,b,c,d)
        }
        return wwww
    }
    return www
}

const res = ww()
res()()