const reverseString = require("./reverseString");

//Arrange
const message = {
  success: "String succesfully reversed",
  error: "String failed to reverse",
};

//Act
const countSuccessFunction = reverseString("Victoria");

//Assert
test(message.success, () => {
  expect(countSuccessFunction).not.toMatch("Victoria");
});
