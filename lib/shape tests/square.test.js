const {Square} = require('../shapes')

it('should provide the svg code that applies the color and format of the shape', () => {
    const shape = new Square();
    shape.setColor("yellow");
    expect(shape.render()).toEqual(`<rect x="95" y="45" height="110" width="110" fill="yellow" />`);
})