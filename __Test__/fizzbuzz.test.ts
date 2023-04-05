import { Said } from "../fizzbuzz";

describe("test FizzBuzz", () => {
  it("should be Fizz", () => {
    // 1 arrange
    const expectedResult = "Fizz";

    // 3 action
    const result1 = Said(3);
    const result2 = Said(6);
    const result3 = Said(9);
    const result4 = Said(12);
    const result5 = Said(21);
    const result6 = Said(99);

    // 2 assert
    expect(result1).toEqual(expectedResult);
    expect(result2).toEqual(expectedResult);
    expect(result3).toEqual(expectedResult);
    expect(result4).toEqual(expectedResult);
    expect(result5).toEqual(expectedResult);
    expect(result6).toEqual(expectedResult);
  });

  it("should be Buzz", () => {
    // 1 arrange
    const expectedResult = "Buzz";

    // 3 action
    const result1 = Said(5);
    const result2 = Said(10);
    const result3 = Said(20);
    const result4 = Said(25);
    const result5 = Said(55);
    const result6 = Said(500);

    // 2 assert
    expect(result1).toEqual(expectedResult);
    expect(result2).toEqual(expectedResult);
    expect(result3).toEqual(expectedResult);
    expect(result4).toEqual(expectedResult);
    expect(result5).toEqual(expectedResult);
    expect(result6).toEqual(expectedResult);
  });

  it("should be FizzBuzz", () => {
    // 1 arrange
    const expectedResult = "FizzBuzz";

    // 3 action
    const result = Said(30);

    // 2 assert
    expect(result).toEqual(expectedResult);
  });

  it("should be input", () => {
    // 1 arrange
    const expectedResult = "1";

    // 3 action
    const result = Said(1);

    // 2 assert
    expect(result).toEqual(expectedResult);
  })

  test.each([
    {
        num: 1, expectedResult: "1",
    },
    {
        num: 3, expectedResult: "Fizz",
    },
    {
        num: 5, expectedResult: "Buzz",
    },
    {
        num: 15, expectedResult: "FizzBuzz"
    }
  ])("", ({num, expectedResult}) => {
    expect(Said(num)).toBe(expectedResult);
  });
});
