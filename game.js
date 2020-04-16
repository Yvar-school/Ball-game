var paddle, paddleY;

var element = document.getElementById('paddle');

var gamearea = document.getElementById('gamearea');
var score = 0;
x = 300;
y = 60;
rY= 10;
rX = 4;


let keyState = {};

function setKeystateByEvent(e, state = false) {
    keyState[e.keyCode || e.which] = state;
    return true;
}

function init() {
    paddle = document.getElementById('paddle');
    stylepaddle = getComputedStyle(paddle);
    paddleY = parseInt(stylepaddle.top);
    ball = document.getElementById('ball')
    StyleBall = getComputedStyle(ball);
    setEventListeners();
    setInterval(movePaddle, 60);
    setInterval(run, 10);
}

function setEventListeners() {
    window.addEventListener('keydown', (e) => {
        setKeystateByEvent(e, true);
    }, true);

    window.addEventListener('keyup', (e) => {
        setKeystateByEvent(e, false);
    }, true);

    return true;
}

function movePaddle() {
    if (keyState[38]) {
        upArrow();
    }
    if (keyState[40]) {
        downArrow();
    }

    element.style.top = paddleY + 'px';
}

function run() {
    x += rX;
    ball.style.left = x + "px";
    y += rY;
    ball.style.top = y + "px";

    if (paddle.style.top < 0){
        y = 0
    }

    if ( (y + ball.clientHeight > gamearea.clientHeight + 44) || ( -50 + y < 0))
    {
        rY *= -1;
    }
    if (x + ball.clientWidth > gamearea.clientWidth)
    {
        rX *= -1.5;
        ball.style.backgroundColor = getRandomColor();
    }
    if(Collide(ball, paddle)){
        rX *= -1;
        paddle.style.backgroundColor = getRandomColor();    
    }
    
    if (x < -1)
    {
        score++;
        document.getElementById('nummer').innerHTML = "score:" +score;
        rX = 4;
        x = 300;
    }
    switch (score)
    {
        case 1:
            document.getElementById('Top').style.backgroundColor = getRandomColor();
            document.getElementById('score').style.backgroundColor = getRandomColor();
            document.getElementById('footer').style.backgroundColor = getRandomColor();
        break;
        case 2:
            document.getElementById('Top').style.backgroundColor = getRandomColor();
            document.getElementById('score').style.backgroundColor = getRandomColor();
            document.getElementById('footer').style.backgroundColor = getRandomColor();
        break;
        case 3:
            document.cookie="ncookie="+name;
            document.cookie="scookie="+score;
            window.location.href='./points.php';
        break;
    }

}
function Collide(subjectElement, targetElement){
    stylePaddle = getComputedStyle(targetElement);
    styleBall = getComputedStyle(subjectElement);
    var balLeft = parseInt(styleBall.left);
    var balTop = parseInt(styleBall.top)
    var bar1left = parseInt(stylePaddle.left)
    var bar1top = parseInt(stylePaddle.top)
    
    if (balLeft < bar1left + paddle.clientWidth &&
            balLeft + ball.clientWidth > bar1left &&
            balTop < bar1top + paddle.clientHeight &&
            ball.clientHeight + balTop > bar1top) {
                return true;
            } else{
                return false;
            }
 }


function upArrow() {
    paddleY -= 30;
    if(paddleY < 50){
        paddleY = 50;
    }
}

function downArrow() {
    paddleY += 30;
    if (paddleY + paddle.clientHeight - 60 > gamearea.clientHeight){
        paddleY = (gamearea.clientHeight - 100)
    }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

