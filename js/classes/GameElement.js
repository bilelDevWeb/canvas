export class GameElements {
    constructor(x, y, width, height, color) {
        this.x = x;          
        this.y = y;          
        this.width = width;  
        this.height = height; 
        this.color = color;  
    }

    getX() { return this.x; }
    setX(x) { this.x = x; }

    getY() { return this.y; }
    setY(y) { this.y = y; }

    getWidth() { return this.width; }
    setWidth(width) { this.width = width; }

    getHeight() { return this.height; }
    setHeight(height) { this.height = height; }

    getColor() { return this.color; }
    setColor(color) { this.color = color; }
}