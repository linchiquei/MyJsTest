document.addEventListener("DOMContentLoaded", () => {
    const h = document.querySelector("#hi");

    // setTimeout(() => {
    //     h.innerHTML = "456";
    // }, 3000);

    const btn = document.querySelector("#btn");
    btn.addEventListener("click", ()=>{
        // var str = btn.innerHTML;
        // if(str === "go"){
        //     btn.innerHTML = "bye";
        // }
        // else {
        //     btn.innerHTML = "go";
        // }
        h.innerText = "456"
    })
});
