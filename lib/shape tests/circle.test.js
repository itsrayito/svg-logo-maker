const {Circle} = require('../shapes')

it('should provide svg code that applies the color and format of the shape', () => {
    const shape = new Circle();
    shape.setColor("green");
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="green" />`);
})