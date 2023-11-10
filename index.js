const inquirer = require('inquirer');
const fs = require("fs");

// Importing shape classes
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to create SVG file
function createSvg(shapeObj, textColor, text) {
    let shapeSvg = shapeObj.render();

    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                ${shapeSvg}
                <text x="150" y="115" font-size="40" text-anchor="middle" fill="${textColor}">${text}</text>
            </svg>`;
}

// Prompts for user input
inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: function(value){
            return value.length <= 3 ? true : 'Please enter up to three characters.';
        }
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['circle', 'triangle', 'square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text:',
    }
]).then(answers => {
    let shapeObj;
    switch (answers.shape) {
        case 'triangle':
            shapeObj = new Triangle(answers.shapeColor);
            break;
        case 'circle':
            // Assuming you have a Circle class implemented
            shapeObj = new Circle(answers.shapeColor);
            break;
        case 'square':
            // Assuming you have a Square class implemented
            shapeObj = new Square(answers.shapeColor);
            break;
    }

    const svgContent = createSvg(shapeObj, answers.textColor, answers.text);
    fs.writeFileSync('examples/logo.svg', svgContent);
    console.log('Generated logo.svg');
});
