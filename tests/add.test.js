const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') =>`Hello ${name}`;

test('should add two numbers', () => {
    const result = add(10,30);
    expect(result).toBe(40);

});

test('should see the greeting message for name', () => {
    const result = generateGreeting('Shripad');
    expect(result).toBe('Hello Shripad');

});

test('should see the greeting message for no name', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');

}); 