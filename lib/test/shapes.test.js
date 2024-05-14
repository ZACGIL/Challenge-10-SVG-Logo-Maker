const { Triangle, Square, Circle} = require('../shapes.js');

describe('Testing CSS shapes', () => {
  describe('triangle', () => {
    it('should return correct SVG for triangle', () => {
      
      expect().toEqual(`<rect width="150" height="150" x="10" y="10" fill="red"`);
    });
  });
});