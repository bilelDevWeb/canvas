import  GameElement  from './js/classes/GameElementsjs';

export class Player extends GameElement {
    constructor(x, y, width, height, color) {
        super(x, y, width, height, color);
    }

    
    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}