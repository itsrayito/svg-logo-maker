class Shape {
    constructor (color, shape) {
        this.color = color;
        this.shape = shape;
    }
}

// this will convert the chosen color to lowercase
Shape.prototype.setColor = function (color) {
    return this.color = color.toLowerCase();
}

class Square extends Shape{
    constructor(color, shape) {
        super(color, shape);
    }
}
// the function will make the svg code for this shape
Square.prototype.render = function () {
            return `<rect x="95" y="45" height="110" width="110" fill="${this.color}" />`
        }
    

class Triangle extends Shape {
    constructor(color, shape) {
        super(color, shape);
    }
}
// the function will make the svg code for this shape
Triangle.prototype.render = function () {
            return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
        }
    

class Circle extends Shape {
    constructor(color, shape) {
        super(color, shape);
    }
}

// the function will make the svg code for this shape
Circle.prototype.render = function () {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
}

module.exports = {
    Shape: Shape,
    Square: Square,
    Triangle: Triangle,
    Circle: Circle
}