const { Triangle, Square, Circle} = require('../shapes.js');

describe('Testing CSS shapes', () => {
  describe('triangle', () => {
    it('should return correct SVG for triangle', () => {
      const shape = new Triangle();
      shape.shapeColor = "blue";
      const testFnc = () => {
        return `
        <polygon points="150, 18 244, 182 56, 182" fill="blue" />
        `
      } 
      expect(shape.render()).toEqual(testFnc());
    });
  });
});