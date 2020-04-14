var paddle, paddleY;

var gamearea = document.getElementById('gamearea');
x = 0;
y = 60;
rY= 10;
rX = 4;


function init() {
    paddle = document.getElementById('paddle');
    stylepaddle = getComputedStyle(paddle);
    paddleY = parseInt(stylepaddle.top);
    ball = document.getElementById('ball')
    StyleBall = getComputedStyle(ball);
    setInterval(run, 10);
}

function run() {
    console.log(gamearea.clientWidth);
    x += rX;
    ball.style.left = x + "px";
    y += rY;
    ball.style.top = y + "px";

    if ( (y + ball.clientHeight > gamearea.clientHeight + 44) || ( -50 + y < 0))
    {
        rY *= -1;
    }
    if (x + ball.clientWidth > gamearea.clientWidth)
    {
        rX *= -1.5;
        ball.style.backgroundColor = getRandomColor();
    }
    
}


function upArrow() {
    var element = document.getElementById('paddle');
    paddleY -= 10;
    element.style.top = paddleY + 'px';
}

function downArrow() {
    var element = document.getElementById('paddle');
    paddleY += 10;
    element.style.top = paddleY + 'px';
}

document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 38:
            upArrow();
            break;
        case 40:
            downArrow();
            break;
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