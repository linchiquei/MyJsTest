document.addEventListener("DOMContentLoaded", loadEnd);

function loadEnd(){
    var timer; //這個應該不能放入click中,同理！
    var sec = 0; //這個應該不能放入click事件中,會變成每點一次都宣告一個？
    const h =  document.querySelector("#timer");
    document.querySelector("#start-btn").addEventListener('click', ()=>{
        
        if(sec != 0){
            clearInterval(timer);
            sec=0;
            h.innerHTML = sec;
        }
        else {
            timer = setInterval(()=>{
                sec= sec + 1;
                h.innerHTML = sec;
            },1000);
        }
    });
}






















