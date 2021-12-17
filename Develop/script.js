// Assignment code here

//characters for use in password
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var special = "!@#$%^&*()"
var number = "0123456789"

function generatePassword() {

  var generatedCharacters = "";

  var passwordLength = window.prompt("Enter amount of characters you would like in your password between 6 and 50");
  if (passwordLength < 6 || length > 50) {
    window.alert("length of password does not meet requirements");
    return null;

};
console.log("Length of password " + passwordLength)
 var passwordLowercase = window.confirm ("Would you like your password to contain lowercase?");
 if (passwordLowercase === true) {
   console.log("lowercase char confirmed")

   generatedCharacters += lowercase;
 };

 var passwordUppercase = window.confirm ("would you like your password to contain uppercase?");
 if (passwordUppercase === true) {
   console.log("uppercase char confirmed")

   generatedCharacters += uppercase;
 }
 var numberCharacters = window.confirm ("would you like your password to contain numbers?");
if (numberCharacters === true) {
  console.log ("numbers confirmed")
  generatedCharacters += number;
}
var specialCharacters = window.confirm ("would you like your password to contain special characters?");
if (specialCharacters === true) {
  console.log ("special characters confirmed")

  generatedCharacters += special;
}
var randomPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    randomPassword += generatedCharacters[Math.floor(Math.random() * generatedCharacters.length)];
  }
  console.log("The random password is " + randomPassword);

  return randomPassword;
  
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
