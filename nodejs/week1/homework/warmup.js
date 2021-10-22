console.log("inside warmup file");

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        return this.radius * 2;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }

}
const circle = new Circle(10);
console.log(circle.getDiameter()); // 20
console.log(circle.getCircumference());
console.log(circle.getArea());