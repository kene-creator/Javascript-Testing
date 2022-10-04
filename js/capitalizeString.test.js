const capitalize = require("./capitalizeString");

//Arrange
const successMessage = "capitalize first letter of string";

//Act
const capitalizeFirst = capitalize("victoria");

//Assert
test(successMessage, () => {
  expect(capitalizeFirst).not.toMatch("victoria");
});
