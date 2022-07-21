import {
  capitalize,
  calculator,
  reverseString,
  caesarCipher,
} from "./utils.js";

it("Capitalize first letter of string", () => {
  expect(capitalize("how much wood would a")).toBe("How much wood would a");
});

it("Calculator: add", () => {
  expect(calculator.add(53, 23)).toBe(76);
});

it("Calculator: subtract", () => {
  expect(calculator.subtract(69, 2)).toBe(67);
});

it("Calculator: divide", () => {
  expect(calculator.divide(16, 4)).toBe(4);
});

it("Calculator: multiply", () => {
  expect(calculator.multiply(3, 7)).toBe(21);
});

it("Reverse string", () => {
  expect(reverseString("Hello World")).toBe("dlroW olleH");
});

it("Caesar cipher", () => {
  expect(caesarCipher("defend the east wall of the castle", 1)).toBe(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );
});
