class Shapes {
    constructor(textColor, shape, shapeColor) {
        this.textColor = textColor;
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
        .shape {
            position: relative;
            width: 0;
            height: 0;
            border-left: 100px solid transparent;
            border-right: 100px solid transparent;
            border-bottom: 200px solid ${shapeColor};
        }
        
        h1 {
            color: ${textColor};
            font-size: 40px;
        
            position: absolute;
            top: 42%;
            left: 50%;
            transform: translate(-50%, 150%);
        }
        `
    }

    square() {
        return `
        .shape {
            position: relative;
            height: 300px;
            width: 300px;
            background-color: ${shapeColor};
        }

        h1 {
            color: ${textColor};
            font-size: 40px;
        
            position: absolute;
            top: 42%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        `
    }

    circle() {
        return `
        .shape {
            position: relative;
            height: 300px;
            width: 300px;
            border-radius: 50%;
            background-color: ${shapeColor};
        }
        
        h1 {
            color: ${textColor};
            font-size: 40px;
        
            position: absolute;
            top: 42%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
        `
    }
}

module.exports = Shapes;