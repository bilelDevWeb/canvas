import { GameElement } from './GameElements.js';

export class Ball extends GameElement {
    constructor(x, y, radius, color, speedX, speedY) {
        super(x, y, radius * 2, radius * 2, color);
        this.radius = radius; 
        this.speedX = speedX; 
        this.speedY = speedY; 
    }

    
    getSpeedX() { return this.speedX; }
    setSpeedX(speedX) { this.speedX = speedX; }

    getSpeedY() { return this.speedY; }
    setSpeedY(speedY) { this.speedY = speedY; }

    getRadius() { return this.radius; }
    setRadius(radius) { this.radius = radius; }

    
    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }

    
    move() {
        this.x += this.speedX;
        this.y += this.speedY;

        
        if (this.x - this.radius <= 0 || this.x + this.radius >= 640) {
            this.speedX = -this.speedX; 
        }

        if (this.y - this.radius <= 0 || this.y + this.radius >= 360) {
            this.speedY = -this.speedY; 
        }
    }
}