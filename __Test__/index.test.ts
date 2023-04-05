import { sum, divide } from "../cal";

describe('test', () => {
    // 1 it = 1 test case อยู่ภายใต้ Describe สามารถมีได้หลาย test case (หลาย it) 
    it('should be 3', () => {
        // 1 arrange
        const expectedResult = 3;

        // 3 action
        const result = sum(3,0);

        // 2 assert
        expect(result).toBe(expectedResult);
    });

    it('should be 1', () => {
        // 1 arrange
        const expectedResult = 1;

        // 3 action
        const result = divide(2,2);

        // 2 assert
        expect(result).toEqual(expectedResult);
    });
});