const content = document.querySelector(".content");
const pwr_btn = document.querySelector("#pwr-btn");
const battery = document.querySelector("#battery");
const home_btn = document.querySelector("#home-btn");
const screenStatus = document.querySelector("#screen-status");
const bottomLockP = document.querySelector("#home");

const navDivOne = document.querySelector(".navDivOne");
const navDivTwo = document.querySelector(".navDivTwo");
const navDivThree = document.querySelector(".navDivThree");
const navDivFour = document.querySelector(".navDivFour");



const mainScreenAppIconOne = document.querySelector(".mainScreenAppIconOne");
const mainScreenAppIconTwo = document.querySelector(".mainScreenAppIconTwo");
const mainScreenAppIconThree = document.querySelector(".mainScreenAppIconThree");


mainScreenAppIconOne.style.background  = "url('/assets/images/notes.png') center/cover no-repeat";
mainScreenAppIconTwo.style.background  = "url('/assets/images/snake.png') center/cover no-repeat";
mainScreenAppIconThree.style.background  = "url('/assets/images/info.png') center/cover no-repeat";

const dateSpan = document.querySelector("#dateSpan");
const timeSpan = document.querySelector("#timeSpan");

const childrenContent = content.querySelectorAll("*");

let isPower = false;
let isCooldown = false;
let batteryInterval;
let batteryStatus = 100;



function updateBatteryStatus(){
    if(batteryStatus<=50){
        battery.classList.replace("gg-battery-full", "gg-battery");
        // alert("zamieniono klase 1");
    } 
    if(batteryStatus===0){
        battery.classList.replace("gg-battery", "gg-battery-empty");
        // alert("zamieniono klase 2");
        clearInterval(batteryInterval);
        batteryInterval = null;
        content.style.background = "url('/assets/images/battery-empty.png') center/contain no-repeat black";
        childrenContent.forEach(child =>{
            child.style.opacity = "0";
        });
        pwr_btn.removeEventListener('click', powerOnOff);
        home_btn.removeEventListener('mouseup', unlockingPhone);
    } 
    // console.log('Bateria: '+batteryStatus);
    if(batteryStatus > 0) batteryStatus--;
    
}


function powerOnOff(){
    if (!isCooldown) {
        isCooldown = true;
        setTimeout(() => {
            switch (isPower) {
                case true:
                    
                    content.style.background = "url('../images/lock-screen-wallpaper.png') center/cover no-repeat"
                    childrenContent.forEach(child =>{
                        child.style.opacity = "1";
                    });

                    // alert("true");
                    if(!batteryInterval){ batteryInterval = setInterval(updateBatteryStatus, 1750);}
                    lockingDisplay();


                    button.addEventListener('mouseup', unlockingPhone);
                    mute_btn.addEventListener('click', muting);
                    volumeup_btn.addEventListener('click', volumingUp);
                    volumedown_btn.addEventListener('click', volumingDown);
                    break;
                case false:
                    content.style.background = "black";
                    childrenContent.forEach(child =>{
                        child.style.opacity = "0";
                        
                    });
                    clearInterval(batteryInterval);
                    batteryInterval = null;
                    // alert("false");

                    
                    button.removeEventListener('mouseup', unlockingPhone);
                    mute_btn.removeEventListener('click', muting);
                    volumeup_btn.removeEventListener('click', volumingUp);
                    volumedown_btn.removeEventListener('click', volumingDown);
                    break;
            }
            isPower = !isPower;
            isCooldown = false;
            // alert("switch działa");
        }, 500); 
    }
};

pwr_btn.addEventListener('click', powerOnOff);

batteryInterval = setInterval(updateBatteryStatus, 1750);