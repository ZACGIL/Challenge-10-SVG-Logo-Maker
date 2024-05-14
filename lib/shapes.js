class Shapes {
    constructor(shapeColor) {;
        this.shapeColor = shapeColor;
    }
    
    render() {
    }
}

class Triangle extends Shapes {
    constructor(shapeColor){
        super(shapeColor);
    }

    render(){
        return `
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        `
    }
}

class Square extends Shapes {
    constructor(shapeColor){
       super(shapeColor);
    }

    render() {
        return `
        <rect width="150" height="150" x="70" y="70" fill="${this.shapeColor}"/>
        `
    }
}

class Circle extends Shapes {
    constructor(shapeColor){
        super(shapeColor);
    }

    render() {
        return `
        <circle cx="150" cy="140" r="80" fill="${this.shapeColor}" />
        `
    }
}

module.exports = {
    Triangle,
    Square,
    Circle
}