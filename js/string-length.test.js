const stringLength = require("./string-length");

//Arrange
const message = {
  success: "Length of string is greater than 1 and less than 11",
  error: "length of the string must be less than 11 and greater than 0",
};

//Act
const countSuccessFunction = stringLength("Victoria");
const countFailFunction = () => stringLength("");

// test("properly add two numbers", () => {
//   expect(stringLength("house")).toBe(5);
// });

//Assert
test(message.success, () => {
  expect(countSuccessFunction).toBe(8);
});
test(message.error, () => {
  expect(countFailFunction).toThrow("Error");
});
