class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        const canvas = document.getElementById('myCanvas');
        const context = canvas.getContext('2d');

        context.beginPath();
        context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        context.fillStyle = this.fillColor;
        context.fill();
        context.stroke();
    }
}

const c1 = new Circle(90, 80, 50, 0, 2 * Math.PI, "#0008e3");
c1.draw();


function getRandomColor() {
    return 'rgb(' + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ')';
}

function createCircle() {
    const canvas = document.getElementById('myCanvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const circleWidth = Math.floor(Math.random() * window.screen.width);
    const circleHeight = Math.floor(Math.random() * window.screen.height);
    const circleRadius = Math.floor(Math.random() * 100);
    const circleColor = getRandomColor();
    const randomCircle = new Circle(circleWidth, circleHeight, circleRadius, 0, 2 * Math.PI, circleColor);
    randomCircle.draw();
}

document.body.addEventListener("mousemove", createCircle);