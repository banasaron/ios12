const telefon = document.querySelector(".container");
let deg = 0;
let canRotate = true;

document.addEventListener('keydown', (event)=>{

    if (canRotate){

        if(event.keyCode === 188){
            deg = deg - 90;
            telefon.style.transform = "rotate("+deg+"deg)";
            setCooldown();
        }  

        if(event.keyCode === 190){
            deg = deg + 90;
            telefon.style.transform = "rotate("+deg+"deg)";
            setCooldown();
        }  

    }
});
function setCooldown() {
    canRotate = false;
    setTimeout(() => {
        canRotate = true;
    }, 1000); 
}