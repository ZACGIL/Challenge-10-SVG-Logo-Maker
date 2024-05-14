const Shapes = require('./shapes.js');

class FormatCSS {
    constructor(textColor, shape, shapeColor) {
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    createStyle() {
        console.log(`${this.textColor}, ${this.shape}, ${this.shapeColor}`);

        return `
        .container {
            margin: 1;
            display: flex;
            justify-content: center;
        }
       `
    }
} 

module.exports = FormatCSS;