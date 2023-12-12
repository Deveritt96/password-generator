// Assignment code here
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
var numbers = "0123456789";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var characterLimit = parseInt(window.prompt("Enter length of password (must be between 8 and 126 characters)"));
  if (characterLimit < 8 || characterLimit > 128) {
    alert("Error. Password must be between 8 and 128 characters.");
    return;
  }
  var specialCharInput = window.confirm("Include special characters?");
  var lowerCaseInput = window.confirm("Include lower case letters?");
  var upperCaseInput = window.confirm("Include upper case letters?");
  var numbersInput = window.confirm("include numbers?");
  
   if (!specialCharInput && !lowerCaseInput && !upperCaseInput && !numbersInput){
      alert("Error. Requires at least two types of characters.")
      return;

   }

  var password = generatePassword(characterLimit, specialCharInput, lowerCaseInput, upperCaseInput, numbersInput);
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

function generatePassword(characterLimit, specialCharInput, lowerCaseInput, upperCaseInput, numbersInput) {
  var allCharacters = "";
  
  if (specialCharInput === true) {
    allCharacters += specialCharacters;
  
  }

  if (lowerCaseInput === true) {
    allCharacters += lowercaseLetters;
  
  }

  if (upperCaseInput === true) {
    allCharacters += uppercaseLetters;
  
  }

  if (numbersInput === true) {
    allCharacters += numbers;
  
  }

  var password = "";
  
  for (let i = 0; i < characterLimit; i++) {
    var randomIndex = Math.floor(Math.random() * allCharacters.length);
    var randomCharacter = allCharacters[randomIndex];
    password += randomCharacter;
  }
  
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);