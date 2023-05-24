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
        return <svg width="100" height="100">
        <rect width="" height=""/>
        </svg>
    }
}

// todo: create circle class that extends shape, include render() and return/add properties of specified shape to test w/ jest
class Circle extends Shape {
    constructor(text, colorText, colorShape) {
        super(text, colorText, colorShape);
    }
    render() {
        // don't know the radius yet...
        return <svg width="100" height="100">
        <circle r=""/>
        </svg>
    }
}

// todo: create triangle class that extends shape, include render() and return/add properties of specified shape to test w/ jest
class Triangle extends Shape {
    constructor(text, colorText, colorShape) {
        super(text, colorText, colorShape);
    }
    render() {
        // need to research how to make triangle
        return <svg width="100" height="100">
        <polygon points=""/>
        </svg>
    }
}

// todo: export classes square/circle/triangle
module.exports = {Square, Circle, Triangle};