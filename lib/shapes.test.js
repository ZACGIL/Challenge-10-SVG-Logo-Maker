const Shapes = require('./shapes.js');

describe('Testing CSS shapes', () => {
  describe('triangle', () => {
    it('should return correct SVG for triangle', () => {
        const Testing = new Shapes('blue', 'triangle', 'red');

        const testFunc = () => {
            return `
            .shape {
                position: relative;
                width: 0;
                height: 0;
                border-left: 100px solid transparent;
                border-right: 100px solid transparent;
                border-bottom: 200px solid red;
            }
            
            h1 {
                color: blue;
                font-size: 40px;
            
                position: absolute;
                top: 42%;
                left: 50%;
                transform: translate(-50%, 150%);
            }
            `
        }
        expect(Testing).toBe(testFunc());
    });
  });
});