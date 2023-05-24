const { Square, Circle, Triangle } = require('./shapes.js');


// still working on this-test comes back with FAILLLL
describe('Square', () => {
    test('should render a blue Square', () => {
        const blueSquare = new Square();
        blueSquare.setColor("blue");
        expect(blueSquare.render()).toEqual(`<rect width="200" height="200" fill="blue"/>`);
    });
});
