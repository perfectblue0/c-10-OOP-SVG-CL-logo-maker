const { Square, Circle, Triangle } = require('./shapes.js');


// still working on this-test comes back with FAILLLL
describe('Square', () => {
    
    it('should render a blue Square', () => {
        const blueSquare = new Square("ABC", "white", "blue");
        expect(blueSquare.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect width="200" height="200" fill="blue"/>
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="white">"ABC"</text>
        </svg>`);
    });
});
