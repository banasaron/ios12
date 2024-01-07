const canvas = document.querySelector("canvas");
const startButton = document.querySelector("#startButton");
const gameOverButton = document.querySelector("#gameOver");
const closeGameButton = document.querySelector("#closeGameSnake");

const upButton = document.querySelector("#upButton");
const downButton = document.querySelector("#downButton");
const leftButton = document.querySelector("#leftButton");
const rightButton = document.querySelector("#rightButton");

let isOn = true;

document.addEventListener('DOMContentLoaded', function () {
    const mainScreenAppIconTwo = document.getElementById('snakeGameIcon');

    mainScreenAppIconTwo.addEventListener('click', function () {
        startSnakeGame();
    });
});

function startSnakeGame(){

    hideMainScreenElements();


    closeGameButton.style.display = "flex";

    snakeGame();

    window.addEventListener('resize', function(){
        if(isOn){
            if(window.innerWidth < 768){
                directionBtns.forEach(btn => {
                    btn.style.display = "block";
                });
                    
            } else{
                directionBtns.forEach(btn => {
                    btn.style.display = "none";
                });
            }
        } 
    });

}
function hideMainScreenElements(){

    topSpan.style.backgroundColor = "black";
    
    Object.assign(middleSpan.style, {
        backgroundColor: "#454545",
        margin: "0"
    });
    bottomSpan.style.backgroundColor = "black";
    
    mainScreenAppIcons.forEach(app =>{
        app.style.display = "none";
    });
    navDivs.forEach(div =>{
        div.style.display = "none";

    });
    canvas.style.display = 'block';
    startButton.style.display = 'block';
    gameOverButton.style.display = 'none';
}
function backToTheMainScreen(){
    isOn = false;
    bugnake_backgroundmusic.pause();

    const gameOverButton = document.getElementById('gameOver');
    canvas.style.display = "none";
    startButton.style.display = 'none';
    gameOverButton.style.display = "none";
    closeGameButton.style.display = "none";
    topSpan.style.backgroundColor = "rgba(0, 0, 0, 0)";
    middleSpan.style.backgroundColor = "rgba(0, 0, 0, 0)";

    directionBtns.forEach(btn => {
        btn.style.display = "none";
    });
    Object.assign(middleSpan.style, {
        backgroundColor: "rgba(0, 0, 0, 0)",
        margin: "10px"
    });
    Object.assign(bottomSpan.style, {
        backgroundColor: "rgba(0, 0, 0, 0)"
    });
    mainScreenAppIcons.forEach(app =>{
        app.style.display = "grid";
    });
    navDivs.forEach(div =>{
        div.style.display = "block";
    });
}


function snakeGame(){
    isOn = true;
    bugnake_backgroundmusic.play();
    bugnake_backgroundmusic.volume = volumeN / 1600;
    bugnake_backgroundmusic.loop = true;

    point.volume = volumeN / 1600;
    // alert("snake")

    const ctx = canvas.getContext('2d');
    const cellSize = 20;
    const initialWidth = 18;
    const initialHeight = 21;

    let snake = [{ x: 5, y: 5 }];
    let direction = 'right';
    let food;
    let score = 0;
    let intervalId;

    function drawSnake() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#33cc33';
        snake.forEach(segment => {
            ctx.fillRect(segment.x * cellSize, segment.y * cellSize, cellSize, cellSize);
        });
    }

    function update() {
        const head = { ...snake[0] };

        switch (direction) {
            case 'up':
                head.y--;
                break;
            case 'down':
                head.y++;
                break;
            case 'left':
                head.x--;
                break;
            case 'right':
                head.x++;
                break;
        }

        snake.unshift(head);

 
        if (head.x < 0 || head.x >= canvas.width / cellSize || head.y < 0 || head.y >= canvas.height / cellSize || isCollision()) {
            endGame();
        } else {

            if (head.x === food.x && head.y === food.y) {
                score++;
                point.play();
                generateFood();
            } else {
                snake.pop();
            }

            drawSnake();
            drawFood();
            drawScore();
        }
    }

    function isCollision() {
        return snake.slice(1).some(segment => segment.x === snake[0].x && segment.y === snake[0].y);
    }

    function generateFood() {
        food = {
            x: Math.floor(Math.random() * (canvas.width / cellSize)),
            y: Math.floor(Math.random() * (canvas.height / cellSize))
        };

        while (snake.some(segment => segment.x === food.x && segment.y === food.y)) {
            food = {
                x: Math.floor(Math.random() * (canvas.width / cellSize)),
                y: Math.floor(Math.random() * (canvas.height / cellSize))
            };
        }

        drawFood();
    }

    function drawFood() {
        ctx.fillStyle = '#ff0000';
        ctx.fillRect(food.x * cellSize, food.y * cellSize, cellSize, cellSize);
    }

    function drawScore() {
        ctx.fillStyle = '#fff';
        ctx.font = '20px Arial';
        ctx.fillText('Score: ' + score, 10, 30);
    }

    function resetGame() {
        snake = [{ x: 5, y: 5 }];
        direction = 'right';
        score = 0;
        generateFood();
        canvas.style.display = 'block';
        document.getElementById('gameOver').style.display = 'none';
    }

    function endGame() {

        clearInterval(intervalId); 
        canvas.style.display = 'none';
        const startButton = document.getElementById('startButton');
        if (isOn){
            const gameOverButton = document.getElementById('gameOver');
            gameOverButton.style.display = 'block';
            gameOverButton.innerHTML = 'Game Over! Score: '+score+'<br>(click to restart)';
            startButton.style.display = "none";
        }   
        startButton.style.display = "none";

    }

    

    function handleKeyPress(e) {
        switch (e.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }
    }

    upButton.addEventListener('click', ()=>{
        direction = 'up';
    });
    downButton.addEventListener('click', ()=>{
        direction = 'down';
    });

    leftButton.addEventListener('click', ()=>{
        direction = 'left';
    });

    rightButton.addEventListener('click', ()=>{
        direction = 'right';
    });


    function startGame() {
        resetGame();
        intervalId = setInterval(update, 100);
        document.getElementById('startButton').style.display = 'none'; 
        document.getElementById('closeGameSnake').style.display = 'flex';
    }

    


    canvas.width = initialWidth * cellSize;
    canvas.height = initialHeight * cellSize;


    startButton.addEventListener('click', startGame);




    gameOverButton.addEventListener('click', startGame);


    
    closeGameButton.addEventListener('click', backToTheMainScreen);


    document.addEventListener('keydown', handleKeyPress);
}
