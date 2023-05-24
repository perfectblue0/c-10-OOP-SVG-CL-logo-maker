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
    render() {
        // don't know what sizes yet...
        return <rect width="" height=""/>
    }
}

// todo: create circle class that extends shape, include render() and return/add properties of specified shape to test w/ jest
class Circle extends Shape {
    constructor(text, colorText, colorShape) {
        super(text, colorText, colorShape);
    }
    render() {
        // don't know the radius yet...
        return <circle r=""/>
    }
}

// todo: create triangle class that extends shape, include render() and return/add properties of specified shape to test w/ jest
class Triangle extends Shape {
    constructor(text, colorText, colorShape) {
        super(text, colorText, colorShape);
    }
    render() {
        // need to research how to make triangle
        return <polygon points=""/>
    }
}

// todo: export classes square/circle/triangle
module.exports = {Square, Circle, Triangle};