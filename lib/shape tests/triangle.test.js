const {Triangle} = require('../shapes')

it('should provide svg code that applies the color and format of the shape', () => {
    const shape = new Triangle();
    shape.setColor("#AF7AC5");
    expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="#AF7AC5" />`);
})