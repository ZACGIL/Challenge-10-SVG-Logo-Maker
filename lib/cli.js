const inquirer = require('inquirer');

class CLI {
    constructor() {
        this.title = '';
    }

    createLogo() {
        return inquirer
        .prompt([
           {
                type: 'input',
                name: 'text',
                message: 'Please enter up to three characters for your logo',
           },
           {
                type: 'input',
                name: 'textColor',
                message: 'Add a color or hexidecimal number for your text',
           },
           {
                type: 'list',
                name: 'shape',
                choices: ['circle', 'triangle', 'square'],
                message: 'Please select a shape for your logo',
           },
           {
                type: 'input',
                name: 'shapeColor',
                message: 'Add a color or hexidecimal number for your shape',

           }
        ])
        .then(({ text, textColor, shape, shapeColor }) =>{
            console.log(`Your text was ${text}, its color was ${textColor}. Your shape was ${shape}, its color was ${shapeColor}.`);
            console.log('Generated logo.svg');
        })
        .catch((err) => {
            console.log(`Oop! Something went wrong! ${err}`);
        })
    }
}

module.exports = CLI;