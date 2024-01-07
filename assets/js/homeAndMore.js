// const content = document.querySelector('.content');
// const contentChildren = content.querySelectorAll("*"); this variables are already identifier in power.js
const topSpan = document.querySelector('#topSpan');
const topSpanChildren = topSpan.querySelectorAll("*");

const middleSpan = document.querySelector('#middleSpan');
const middleSpanChildren = middleSpan.querySelectorAll("*");

const bottomSpan = document.querySelector('#bottomSpan');
const bottomSpanChildren = bottomSpan.querySelectorAll("*");

const screenStatusIcon = document.querySelector("#screen-status");

const directionBtns = document.querySelectorAll(".directionBtn");

// console.log(middleMainScreenSpan);

const mainScreenAppIcons = [
    mainScreenAppIconOne,
    mainScreenAppIconTwo,
    mainScreenAppIconThree
];

const navDivs = [
    navDivOne,
    navDivTwo,
    navDivThree,
    navDivFour
];


function topSpanTimeDisplay(){
    screenStatusIcon.textContent = hour + ":" + minutes; //variables from timer.js 
}

let topSpanInterval;
let pressStartTime;
const holdDuration = 1500;

let button = document.getElementById("home-btn");


function lockingDisplay(){
   
    locked = true;
    isOn = false;
    content.style.gridTemplateRows = "3.6fr 8.7fr 3.5fr";
    content.style.background = "url("+lockScreenUrl+") center/cover no-repeat";
    topSpan.classList.replace("topMainScreenSpan", "topLockScreenSpan");
    middleSpan.classList.replace("middleMainScreenSpan", "middleLockScreenSpan");
    bottomSpan.classList.replace("bottomMainScreenSpan", "bottomLockScreenSpan");
    
    navDivOne.style.display = "none";
    navDivTwo.style.display = "none";
    navDivThree.style.display = "none";
    navDivFour.style.display = "none";
    bottomLockP.style.display = "block";
  
    mainScreenAppIconOne.style.display = "none";
    mainScreenAppIconTwo.style.display = "none";
    mainScreenAppIconThree.style.display = "none";

    //snake
    canvas.style.display = "none";
    startButton.style.display = 'none';
    gameOverButton.style.display = "none";
    closeGameButton.style.display = "none";
    topSpan.style.backgroundColor = "rgba(0, 0, 0, 0)";
    middleSpan.style.backgroundColor = "rgba(0, 0, 0, 0)";
    bottomSpan.style.backgroundColor = "rgba(0, 0, 0, 0)";

    //notes
    input.style.display = "none";
    close_notes_btn.style.display = "none";
    middleSpan.style.display = "block";

    //info
    closeInfoBtn.style.display = "none";
    infoContent.style.display = "none";
    middleSpan.style.overflow = "hidden";
    switching_languages_info.style.display = "none";
    
    timeSpan.style.display = "block";
    dateSpan.style.display = "block";
    clearInterval(topSpanInterval);
    screenStatusIcon.innerHTML = "<i style='font-size: 20px;' class='fa'>&#xf023;</i>";
    // alert("zablokowanie")

}
function unlockingDisplay(){
    locked = false;
    content.style.gridTemplateRows = "2.4fr 9.4fr 3.5fr";
    content.style.background = "url("+main_wallpaper_1Url+") center/cover no-repeat";
    topSpan.classList.replace('topLockScreenSpan', 'topMainScreenSpan');
    
    topSpanInterval = setInterval(topSpanTimeDisplay, 10);
    
    middleSpan.classList.replace('middleLockScreenSpan', 'middleMainScreenSpan');
    middleSpan.style.display = "grid";

    mainScreenAppIconOne.style.display = "grid";
    mainScreenAppIconTwo.style.display = "grid";
    mainScreenAppIconThree.style.display = "grid";
    timeSpan.style.display = "none";
    dateSpan.style.display = "none";
    
    
    bottomSpan.classList.replace('bottomLockScreenSpan', 'bottomMainScreenSpan');
    navDivOne.style.display = "block";
    navDivTwo.style.display = "block";
    navDivThree.style.display = "block";
    navDivFour.style.display = "block";
    bottomLockP.style.display = "none"
    // alert("odblokowane")
}
button.addEventListener("mousedown", ()=>{
    pressStartTime = new Date().getTime();
});

function unlockingPhone(){
    if (pressStartTime){
        var elapsed = new Date().getTime() - pressStartTime;
        if (elapsed >= holdDuration){
            //entire code and content after unlocking the phone:
            unlockingDisplay();
        }
        pressStartTime = null;
    }
};

button.addEventListener('mouseup', unlockingPhone);
