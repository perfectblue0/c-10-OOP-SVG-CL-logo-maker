// todo: create parent class that will be used to make square, triangle, and circle
class Shape {
    constructor(text, colorText, colorShape) {
        this.text = text;
        this.colorText = colorText;
        this.colorShape = colorShape;
    }
}

// todo: create square class that extends shape, include render() and return/add properties of specified shape to test w/ jest
class Square extends Shape {
    constructor(text, colorText, colorShape) {
        super(text, colorText, colorShape);
    }
    // render() {return SVG square properites w/ aforementioned properites included}
}

// todo: create circle class that extends shape, include render() and return/add properties of specified shape to test w/ jest
class Circle extends Shape {
    constructor(text, colorText, colorShape) {
        super(text, colorText, colorShape);
    }
    // render() {return SVG circle properites w/ aforementioned properites included}
}

// todo: create triangle class that extends shape, include render() and return/add properties of specified shape to test w/ jest
class Triangle extends Shape {
    constructor(text, colorText, colorShape) {
        super(text, colorText, colorShape);
    }
    // render() {return SVG triangle properites w/ aforementioned properites included}
}

// todo: export classes square/circle/triangle
module.exports = {Square, Circle, Triangle};