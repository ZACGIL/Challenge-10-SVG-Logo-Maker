const { Triangle, Square, Circle} = require('./shapes.js');

class CreateDocument {
    constructor(text, textColor, shape, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }

    checkShape() {
        if(this.shape === 'triangle') {
            return new Triangle(this.shapeColor).render();
        }
        if(this.shape === 'circle') { 
            return new Circle(this.shapeColor).render();
        }
        if(this.shape === 'square') {
            return new Square(this.shapeColor).render();
        }
    }

    createString() {
        const SVGstring = this.checkShape();

        return `<svg version="1.1"
        width="300" height="300"
        xmlns="http://www.w3.org/2000/svg">`
        + 
        SVGstring
        +
        `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${this.textColor}">321</text>
        </svg>`
    }
}

module.exports = CreateDocument;