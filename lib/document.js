const Shapes = require('./shapes');

class CreateDocument {
    constructor(text, textColor, shape, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    render() {
        const shapeSVG = new Shapes(this.shape, this.shapeColor).checkShape();
        
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">`
        + 
        shapeSVG
        +
        `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = CreateDocument;