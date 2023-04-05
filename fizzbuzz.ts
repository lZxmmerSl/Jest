export function Said(num: number) : string {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
        return "FizzBuzz";
    }
    if (num % 5 === 0) {
        console.log("Buzz");
        return "Buzz";
    }
    if (num % 3 === 0) {
        console.log("Fizz");
        return "Fizz";
    }
    console.log(num.toString);
    return num.toString();
}