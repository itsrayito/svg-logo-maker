const inquirer = require('inquirer');
const generate = require('./generate');
const {Square, Triangle, Circle} = require('./shapes');

// This will start the application by asking the user questions they can answer
function init() {
    inquirer
        .prompt([
        {
            type: 'input',
            message: 'Which letters would you like on your logo? Choose up to 3 letters please',
            name: 'letters'
        },
        {
            type: 'input',
            message: 'What color would you like the letters?',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'What type of shape would you like your logo to be?',
            name: 'shape',
            choices: ['Square', 'Triangle', 'Circle']
        },
        {
            type: 'input',
            message: 'What color would you choose for the shape to be?',
            name: 'shapeColor'
        },
    ])
    // this is going to create the shape and letter based from the responses
    .then((response) => {

        const textCode = `<text x="150" y="115" font-size="50" text-anchor="middle" fill="${response.textColor}">${response.letters}</text>`

        // this will make sure the user cannot enter more than three letters
        if (response.letters.length <= 3 && response.shape === 'Square'){
            // this creates a square class that passes in the response shape color and the shape
            const newSquare = new Square(response.shapeColor, response.shape);
            const squareCode = newSquare.render();
            // this will pass the shape code and text code to the generated svg file
            generate.renderSvg(squareCode, textCode);

        } else if (response.letters.length <=3 && response.shape === 'Triangle') {
            // this creates a triangle class that passes in the response shape color and the shape
            const newTriangle = new Triangle(response.shapeColor, response.shape);
            const triangleCode = newTriangle.render();
            // this will pass the shape code and text code to the generated svg file
            generate.renderSvg(triangleCode, textCode);

        } else if (response.letters.length <= 3 && response.shape === 'Circle') {
            // this creates a circle class that passes in the response shape color and the shape
            const newCircle = new Circle(response.shapeColor, response.shape);
            const circleCode = newCircle.render();
            // this will pass the shape code and text code to the generated svg file
            generate.renderSvg(circleCode, textCode);

        // a message will show if the user enters more than 3 letters
        } else {
            return console.log('You cannot choose more that 3 letters, try again!')
        }});
};

module.exports = {init};