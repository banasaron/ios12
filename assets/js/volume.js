const volume_bar = document.querySelector("#volume-bar");
const mute_btn = document.querySelector("#mute-btn");
const volumeup_btn = document.querySelector("#volumeup-btn");
const volumedown_btn = document.querySelector("#volumedown-btn");
const volume_row = document.querySelector("#volume-row");
const volume_img = document.querySelector("#volume-img");

let volumeN = 100; //default
let volume_level = 10;
let apperingCooldown;
let bugnake_backgroundmusic = new Audio(bugnake_backgroundmusicUrl);
let point = new Audio(pointUrl);

// console.log(volumeN+"  |||  "+ volume_level)
function muting(){
    volumeN = 0;
    volume_level = 0;
    // console.log(volumeN+"  |||  "+ volume_level);
    displayVolumeBar(volume_level);
    bugnake_backgroundmusic.volume = volumeN / 1600;
    point.volume = volumeN / 1600;
}
function volumingUp(){
    if(volume_level == 16){
        volumeN = volumeN;
        volume_level = volume_level;
    } else{
        volume_level++;
        volumeN += 10;
    }
    // console.log(volumeN+"  |||  "+ volume_level);
    displayVolumeBar(volume_level);
    bugnake_backgroundmusic.volume = volumeN / 1600;
    point.volume = volumeN / 1600;
}
function volumingDown(){
    if(volume_level == 0){
        volumeN = volumeN;
        volume_level = volume_level;
    } else{
        volume_level--;
        volumeN -= 10;
    }
    // console.log(volumeN+"  |||  "+ volume_level);
    displayVolumeBar(volume_level);
    bugnake_backgroundmusic.volume = volumeN / 1600;
    point.volume = volumeN / 1600;
}

function displayVolumeBar(nElements){
    volume_row.innerHTML = "";

    for(i=0;i<nElements; i++){
        const barElement = document.createElement("div");
        barElement.className = "volume-row-element";
        volume_row.appendChild(barElement);
    }


    if(volume_level === 0) volume_img.src = "assets/images/volume0.png";
    if(volume_level > 0 && volume_level <= 5) volume_img.src = "assets/images/volume1.png";
    if(volume_level > 5 && volume_level <= 10) volume_img.src = "assets/images/volume2.png";
    if(volume_level > 10) volume_img.src = "assets/images/volume3.png";


    volume_bar.style.display = "grid";

    clearInterval(apperingCooldown);

    apperingCooldown = setTimeout(()=>{
        volume_bar.style.display = "none";
    }, 2000);

}
mute_btn.addEventListener('click', muting);
volumeup_btn.addEventListener('click', volumingUp);
volumedown_btn.addEventListener('click', volumingDown);