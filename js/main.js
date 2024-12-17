import Ball from './js/classes/Ball.js';
import  Player from './js/classes/Player.js';


const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');


const ball = new Ball(320, 180, 10, 'red', 3, 2); 
const player1 = new Player(10, 150, 10, 60, 'white'); 
const player2 = new Player(620, 150, 10, 60, 'white'); 


function gameLoop() {
    
    context.clearRect(0, 0, canvas.width, canvas.height);

    
    ball.move();
    ball.draw(context);

    
    player1.draw(context);
    player2.draw(context);

    
    requestAnimationFrame(gameLoop);
}


gameLoop();