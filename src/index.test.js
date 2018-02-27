import sum from './index';

test('Adds 3 + 2 to be 5', () => {
	expect(sum(3, 2)).toBe(5);
});