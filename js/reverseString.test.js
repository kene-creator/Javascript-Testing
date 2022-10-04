const reverseString = require("./reverseString");

//Arrange
const message = {
  success: "String succesfully reversed",
  error: "String failed to reverse",
};

//Act
const reverseFunc = reverseString("Victoria");

//Assert
test(message.success, () => {
  expect(reverseFunc).not.toMatch("Victoria");
});
