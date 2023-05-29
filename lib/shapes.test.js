const { Square, Circle, Triangle } = require('./shapes.js');


// unit test for Square class
describe('Square', () => {
    
    test('should render a blue Square with white text, ABC', () => {
        const square = new Square("ABC", "white", "blue");expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect x="80" width="200" height="200" fill="blue"/>
        <text x="180" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>
        </svg>`);
    });
});

// unit test for Circle class
describe('Circle', () => {
    test('should render a green Circle with white text, ABC', () => {
        const circle = new Circle("ABC", "white", "green");
        expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <circle cx="150" cy="100" r="100" fill="green"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">ABC</text>
        </svg>`);
    });
});

// unit test for Triangle class
describe('Triangle', () => {
    test('should render a yellow Triangle with white text, ABC', () => {
        const triangle = new Triangle("ABC", "white", "yellow");
        expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <polygon points="100, 15 200, 200 0, 200" fill="yellow"/>
        <text x="105" y="175" font-size="60" text-anchor="middle" fill="white">ABC</text>
        </svg>`);
    });
});