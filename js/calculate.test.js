const calculate = require("./calculate");

//Arrange
const message = {
  add: "sum of 2 numbers are:",
  divide: "division of 2 numbers are:",
  multiply: "multiplication of 2 numbers are:",
  subtract: "Subtraction of 2 numbers are:",
};

//Act
const sumOfNumbers = calculate.add(10, 5);
const divisionOfNumbers = calculate.divide(10, 5);
const multiplicationOfNumbers = calculate.multiply(10, 5);
const subtractionOfNumbers = calculate.subtract(10, 5);

describe("calculate", () => {
  test(message.add, () => {
    expect(sumOfNumbers).toBe(15);
  });
  test(message.divide, () => {
    expect(divisionOfNumbers).toBe(2);
  });
  test(message.multiply, () => {
    expect(multiplicationOfNumbers).toBe(50);
  });
  test(message.subtract, () => {
    expect(subtractionOfNumbers).toBe(5);
  });
});
