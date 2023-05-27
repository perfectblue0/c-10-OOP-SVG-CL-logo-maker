// create parent class that will be used to make square, triangle, and circle
class Shape {
    constructor(text, colorText, colorShape) {
        this.text = text;
        this.colorText = colorText;
        this.colorShape = colorShape;
    }
}

// create square class that extends shape, include render() and return/add properties of specified shape to test w/ jest
class Square extends Shape {
    constructor(text, colorText, colorShape) {
        super(text, colorText, colorShape);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect x="80" width="200" height="200" fill="${this.colorShape}"/>
        <text x="180" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
        </svg>`
    }
}

// create circle class that extends shape, include render() and return/add properties of specified shape to test w/ jest
class Circle extends Shape {
    constructor(text, colorText, colorShape) {
        super(text, colorText, colorShape);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="100" fill="${this.colorShape}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
        </svg>`
    }
}

// create triangle class that extends shape, include render() and return/add properties of specified shape to test w/ jest
class Triangle extends Shape {
    constructor(text, colorText, colorShape) {
        super(text, colorText, colorShape);
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <polygon points="100, 15 200, 200 0, 200" fill="${this.colorShape}"/>
        <text x="105" y="175" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text>
        </svg>`
    }
}

// export classes square/circle/triangle
module.exports = { Square, Circle, Triangle };