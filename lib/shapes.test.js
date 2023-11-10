const { Triangle } = require('./shapes');

test('Triangle render method', () => {
  const triangle = new Triangle('blue');
  expect(triangle.render()).toBe('Tringle');
});
