// packages and classes needed to create function to be used in index.js

const fs = require("fs");
const { Square, Circle, Triangle } = require('./shapes');

// function generates svg logo
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
    } else if (shapeChoice == 'Circle') {
        const circle = new Circle(text, colorText, colorShape);
        return fs.writeFile('logo.svg', circle.render(), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Generated logo.svg");
            }
        });
    } else if (shapeChoice == 'Triangle') {
        const triangle = new Triangle(text, colorText, colorShape);
        return fs.writeFile('logo.svg', triangle.render(), (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log("Generated logo.svg");
            }
        });
    }
    
}

// exports function
module.exports = generateLogo;