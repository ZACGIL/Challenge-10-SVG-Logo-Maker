const inquirer = require('inquirer');
const FormatCSS = require('./style');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')

const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

class CLI {
    constructor() {
        this.title = '';
    }

    createLogo() {
        return inquirer
        .prompt([
           {
                type: 'maxlength-input',
                name: 'text',
                message: 'Please enter up to three characters for your logo',
                maxLength: 3
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
            writeFile( 
                join(__dirname, '..', 'examples', 'logo.html'),
                createDocument(text)
            );

            writeFile(
                join(__dirname, '..', 'examples', 'styles.css'),
                new FormatCSS(textColor, shape, shapeColor).createStyle()
            );
        })
        .then(() => {
            console.log('Generated SVG logo.html and styles.css')
        })
        .catch((err) => {
            console.log(`Oop! Something went wrong! ${err}`);
        })
    }
}

module.exports = CLI;