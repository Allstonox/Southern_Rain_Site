class Rain {
    constructor({ position, length}) {
        this.position = position;
        this.length = length;
        this.speed = 5 + ((this.length / 80) * 10);
    }

    update() {
        this.move();
        this.draw();
        this.checkDespawn();
    }

    move() {
        this.position.y += this.speed;
    }

    draw() {
        c.lineWidth = 1;
        c.strokeStyle = 'rgba(0, 200, 255, 0.6)';
        c.beginPath();
        c.moveTo(this.position.x, this.position.y);
        c.lineTo(this.position.x, this.position.y + this.length);
        c.stroke();
    }

    checkDespawn() {
        if(this.position.y > canvas.height) this.despawn();
    }

    despawn() {
        raindrops.splice(raindrops.indexOf(this), 1);
    }
}