const fs = require("fs");
const { Square, Circle, Triangle } = require('./shapes');


function generateLogo(shapeChoice, text, colorText, colorShape) {
    if (shapeChoice == 'Square') {
        const square = new Square(text, colorText, colorShape);
        return fs.writeFile('logo.svg', square.render(), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Generated logo.svg");
            }
        });
    }
}

module.exports = generateLogo;