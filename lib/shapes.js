// Base Shape class
class Shape {
    constructor(color) {
        this.color = color;
    }
}

// Triangle class extending Shape
class Triangle extends Shape {
    render() {
        // SVG for a triangle
        return `<polygon points="150,20 250,180 50,180" fill="${this.color}" />`;
    }
}

// Circle class extending Shape
class Circle extends Shape {
    render() {
        // SVG for a circle
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
}

// Square class extending Shape
class Square extends Shape {
    render() {
        // SVG for a square
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
}

// Exporting the classes
module.exports = { Triangle, Circle, Square };
