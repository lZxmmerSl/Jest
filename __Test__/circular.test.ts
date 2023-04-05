import { get, put } from '../circular';

describe('test 2', () => {
    it('can put 5', () => {
        // 1 arrange
        const expectedResult = 2;

        // 3 action
        put(1);
        put(2);
        put(3);
        put(4);
        put(5);
        put(6);
        const result = get();

        // 2 assert
        expect(result).toBe(expectedResult);
    });
});