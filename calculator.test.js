const StringCalculator = require("./Calculator");

test("returns 0 for an empty string", () => {
    expect(StringCalculator.add("")).toBe(0);
});

test("returns number itself when only one number is given", () => {
    expect(StringCalculator.add("1")).toBe(1);
});

test("returns sum of two numbers", () => {
    expect(StringCalculator.add("1,5")).toBe(6);
});

test("returns sum of multiple numbers", () => {
    expect(StringCalculator.add("1,2,3,4")).toBe(10);
});

test("handles new line as a delimiter", () => {
    expect(StringCalculator.add("1\n2,3")).toBe(6);
});

test("supports custom delimiters", () => {
    expect(StringCalculator.add("//;\n1;2")).toBe(3);
});

test("throws an error for negative numbers", () => {
    expect(() => StringCalculator.add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
});
