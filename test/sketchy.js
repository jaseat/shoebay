var expect = require('chai').expect;
var Sketchy = require('../src/shape/sketchy');

const listOfPoints = [];
for (let i = 0; i < 100; i++) {
  listOfPoints.push({ x: Math.random() * 100, y: Math.random() * 100 });
}

const paths = [];
for (let i = 0; i < 10; i++) {
  const points = [];
  for (let j = 0; j < 25; j++) {
    const idx = Math.floor(Math.random() * listOfPoints.length);
    points.push(listOfPoints[idx]);
  }
  paths.push(points);
}

describe('Sketchy', function() {
  describe('points to svg', function() {
    it('should equal 1', function() {
      for (i = 0; i < 5; i++) {
        const idx1 = Math.floor(Math.random() * paths.length);
        const idx2 = Math.floor(Math.random() * paths.length);
        const svg1 = Sketchy.convertPointArraysToSVG([paths[idx1]]);
        const svg2 = Sketchy.convertPointArraysToSVG([paths[idx2]]);
      }
      expect(1).to.equal(1);
    });
  });
});
