const infoIcon = document.querySelector("#infoIcon");
const infoContent = document.querySelector("#infoContent");
const closeInfoBtn = document.querySelector("#closeInfoBtn");
const switching_languages_info = document.querySelector("#switching_langiages_info");
let english = false;
function info(){
    closeInfoBtn.style.display = "flex";
    topSpan.style.backgroundColor = "black";
    switching_languages_info.style.display = "block";
    infoContent.innerHTML = "Hi!<br><br>I'm glad you're here! Before you is a graphical interpretation of the iOS 12 system, created using HTML, CSS, and JS. With this interface, you can easily adjust the volume using the buttons on the left side of the screen. Additionally, you have the ability to turn off, turn on the phone, and unlock it.<br><br>However, keep in mind that the battery is not infinite, so it's always a good idea to keep an eye on its level displayed on the screen. Currently, some features may not be fully functional, but time will reveal how the system evolves. Now, it's time for entertainment! You can play BugSnake, jot down your thoughts in the notepad, and explore other available features.<br><br>I wish you a fantastic time! If you'd like to learn more about my projects, feel free to browse my portfolio at the following link: <a href='https://banasaron.github.io/portfolio' target='_blank'>https://banasaron.github.io/portfolio</a>.<br><br>Remember, I'm here for you to have a great time, and any improvements or fixes will be implemented as work progresses!<br><br> <b>If you are using this application on a mobile phone, when playing Bugsnake, buttons for controlling the snake will appear. On a computer, you can control it using the arrow keys, and on a mobile device, you can tilt the phone left and right using '<' and '>'</b>";
    switching_languages_info.style.background = "url('/assets/images/english.png') center/cover no-repeat"
    switching_languages_info.addEventListener('click', ()=>{
    switch (english){
        case true:
            // alert("true");
            infoContent.innerHTML = "Hi!<br><br>I'm glad you're here! Before you is a graphical interpretation of the iOS 12 system, created using HTML, CSS, and JS. With this interface, you can easily adjust the volume using the buttons on the left side of the screen. Additionally, you have the ability to turn off, turn on the phone, and unlock it.<br><br>However, keep in mind that the battery is not infinite, so it's always a good idea to keep an eye on its level displayed on the screen. Currently, some features may not be fully functional, but time will reveal how the system evolves. Now, it's time for entertainment! You can play BugSnake, jot down your thoughts in the notepad, and explore other available features.<br><br>I wish you a fantastic time! If you'd like to learn more about my projects, feel free to browse my portfolio at the following link:  <a href='https://banasaron.github.io/portfolio' target='_blank'>https://banasaron.github.io/portfolio</a>.<br><br>Remember, I'm here for you to have a great time, and any improvements or fixes will be implemented as work progresses!<br><br> <b>If you are using this application on a mobile phone, when playing Bugsnake, buttons for controlling the snake will appear. On a computer, you can control it using the arrow keys, and on a mobile device, you can tilt the phone left and right using '<' and '>'</b>";
            switching_languages_info.style.background = "url('/assets/images/english.png') center/cover no-repeat"

            break;
        case false:
            // alert("false");
            infoContent.innerHTML = "Cześć!<br><br>Cieszę się, że tu jesteś! Przed Tobą graficzna interpretacja systemu iOS 12, stworzona przy użyciu technologii HTML, CSS i JS. Dzięki temu interfejsowi możesz łatwo dostosowywać głośność za pomocą przycisków po lewej stronie ekranu. Dodatkowo, masz możliwość wyłączania, włączania telefonu oraz odblokowywania go.<br><br>Pamiętaj jednak, że mimo wszystko bateria nie jest nieskończona, więc zawsze warto trzymać oko na jej poziomie na ekranie. Aktualnie niektóre funkcje mogą jeszcze nie działać, ale czas pokaże, jak system będzie się rozwijał. A teraz czas na rozrywkę! Możesz grać w BugSnake, zapisywać swoje myśli w notatniku, a także korzystać z innych dostępnych funkcji. <br><br>Życzę Ci fantastycznej zabawy! Jeśli masz ochotę dowiedzieć się więcej o moich projektach, zapraszam do przejrzenia mojego portfolio pod poniższym linkiem:  <a href='https://banasaron.github.io/portfolio' target='_blank'>https://banasaron.github.io/portfolio</a>.<br><br>Pamiętaj, że jestem tu, abyś się dobrze bawił, a ewentualne ulepszenia i poprawki będą wprowadzane w miarę postępu prac!<br><br> <b> Jeżeli korzystasz z tej aplikacji na telefonie, przy grze Bugsnake pojawią się przyciski do sterowania wężem, a na komputerze możesz sterować strzałkami, oraz obracać telefon pod '<' i '>'</b>";
            switching_languages_info.style.background = "url('/assets/images/polish.png') center/cover no-repeat"
            break;
    }
    english = !english;
    });
    mainScreenAppIcons.forEach(app => {
        app.style.display = "none";
    });
    Object.assign(middleSpan.style, {
        backgroundColor: "#727272",
        margin: "0",
        display: "block",
        overflowX: "hidden",
        overflowY: "scroll"
    });
    navDivs.forEach(div => {
        div.style.display = "none";
    });
    bottomSpan.style.backgroundColor = "black";
    infoContent.style.display = "block";
    
}
function closeInfo(){
    switching_languages_info.style.display = "none";
    closeInfoBtn.style.display = "none";
    topSpan.style.backgroundColor = "transparent";
    mainScreenAppIcons.forEach(app =>{
        app.style.display = "grid";
    });
    Object.assign(middleSpan.style, {
        backgroundColor: "transparent",
        margin: "10px",
        overflow: "hidden"
    });
    if(!locked){
        middleSpan.style.display = "grid";
    } else{
        middleSpan.style.display = "block";
    }
    
    navDivs.forEach(div =>{
        div.style.display = "block";
    });
    bottomSpan.style.backgroundColor = "transparent";
    infoContent.style.display = "none";
}
infoIcon.addEventListener('click', info);
closeInfoBtn.addEventListener('click', closeInfo);
