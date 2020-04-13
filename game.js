var paddle, paddleY;



function init(){
    paddle = document.getElementById('paddle');
    stylepaddle = getComputedStyle(paddle);
    paddleY = parseInt(stylepaddle.top);
    setInterval(run, 10);        
}

function run() {

}


function upArrow(){
    var element = document.getElementById('paddle');
    paddleY -= 10;
    element.style.top = paddleY + 'px';
    console.log('up')
}

function downArrow(){
    var element = document.getElementById('paddle');
    paddleY += 10;
    element.style.top = paddleY + 'px';
    console.log('down')
}

document.onkeydown = function(event) {
    switch(event.keyCode) {
        case 38:
            upArrow();
        break;
        case 40:
            downArrow();
        break;
    }

}