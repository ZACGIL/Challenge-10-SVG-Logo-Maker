const Shapes = require('./shapes.js');

class FormatCSS {
    constructor(textColor, shape, shapeColor) {
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    createStyle() {
        const shapeCSS = new Shapes(this.textColor, this.shape, this.shapeColor).checkShape();

        const baseCSS = () =>{
        return `
        .container {
            margin: 1;
            display: flex;
            justify-content: center;
        }
       `
        }

        return `${shapeCSS}` + `${baseCSS()}`;
    }
}

module.exports = FormatCSS;