const { Triangle } = require('./shapes');

describe('Triangle class', () => {
    test('render method should return correct SVG string', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150,20 250,180 50,180" fill="blue" />');
    });
});
