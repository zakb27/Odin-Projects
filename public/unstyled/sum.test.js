const sum = require('./sum');
const capitalize = require('./capitalize');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

capitalize('capitalises test',()=>{
    expect(capitalize('test')).toBe('Test')
})