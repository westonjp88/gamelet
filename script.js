// let userName = prompt('Enter your name:');
// console.log(`Your name is ${userName}`)

const ball = document.getElementById('ball') //get the ball

document.addEventListener('keydown',handleKeyPress) //listen for keys
let position = 0; //set initial position

function handleKeyPress(e){
    if(e.code === 'ArrowLeft'){
        position = position - 10;
    }
    if(e.code === 'ArrowRight'){
        position = position + 10;
    }
    if(position < 0){
        positon = 0;
    }
    refresh();
}
function refresh(){
    ball.style.left = position + 'px';
}
