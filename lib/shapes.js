class Shapes {
    constructor(shape, shapeColor) {;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    
    checkShape() {
        if(this.shape === 'triangle')
            return this.triangle();
        if(this.shape === 'circle')
            return this.circle();
        if(this.shape === 'square')
            return this.square();
    }

    triangle() {
        return `
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        `
    }

    square() {
        return `
        <rect width="150" height="150" x="10" y="10" fill="${this.shapeColor}" />
        `
    }

    circle() {
        return `
        <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
        `
    }
}

module.exports = Shapes;