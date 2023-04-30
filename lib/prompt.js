const inquirer = require('inquirer');
const generate = require('./generate');
const {Square, Triangle, Circle} = require('./shapes');

function init() {
    inquirer
    .createPromptModule([
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
    .then((response) => {

        if (response.letters.length <= 3 && response.shape === 'Square'){
            const newSquare = new Square(response.shapeColor, response.shape);
            console.log(newsquare.render);
            generate.render(newSquare, response);
        } else if (response.letters.length <=3 && response.shape === 'Triangle') {
            const newTriangle = new Triangle(response.shapeColor, response.shape);
            generate.render(newTriangle, response);
        } else if (response.letters.length <= 3 && response.shape === 'Circle') {
            const newCircle = new Circle(response.shapeColor, response.shape);
            generate.render(newCircle, response);
        } else {
            return console.log('You cannot choose more that 3 letters, try again!')
        }
    }
    );
};

module.exports = {init};