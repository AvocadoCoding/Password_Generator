// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to check user input for password length
function length() {
  var passwordLength = prompt("Choose a password length of at least 10 characters but no more than 64.");

  if (passwordLength > 9 && passwordLength < 65) {
  console.log(passwordLength);
  return passwordLength;
  } else {
  alert("Incorrect entry. Please choose a value of at least 10 but no more than 64.");
  return length();
  }
}


// Function for user character selection, can select from lowercase, uppercase, numeric and special cahracter arrays
function charType() {
  var charArray=[];
  var zero=[];

  function lowercaseFunc() {
    let lowercase = prompt("Do you want to include lowercase characters in your password? Please answer 'yes' or 'no'.");
    if (lowercase === "yes") {
      charArray= charArray.concat(lowerCasedCharacters);
      return charArray;
    } else if (lowercase === "no"){
      charArray= charArray.concat(zero);
      return charArray;
    } else {
      alert("Error, please enter 'yes' or 'no'.");
      lowercaseFunc();
    }
  }
  
  function uppercaseFunc() {
    let uppercase = prompt("Do you want to include uppercase characters in your password? Please answer 'yes' or 'no'.");
    if (uppercase === "yes") {
      charArray= charArray.concat(upperCasedCharacters);
      return charArray;
    } else if (uppercase === "no"){
      charArray= charArray.concat(zero);
      return charArray;
    } else {
      alert("Error, please enter 'yes' or 'no'.");
      uppercaseFunc();
    }
  }

  function numericFunc() {
    let numeric = prompt("Do you want to include numeric characters in your password? Please answer 'yes' or 'no'.");
    if (numeric === "yes") {
      charArray= charArray.concat(numericCharacters);
      return charArray;
    } else if (numeric === "no"){
      charArray= charArray.concat(zero);
      return charArray;
    } else {
      alert("Error, please enter 'yes' or 'no'.");
      numericFunc();
    }
  }
  
  function specialFunc() {
    let special = prompt("Do you want to include special characters in your password? Please answer 'yes' or 'no'.");
    if (special === "yes") {
      charArray= charArray.concat(specialCharacters);
      return charArray;
    } else if (special === "no"){
      charArray= charArray.concat(zero);
      return charArray;
    } else {
      alert("Error, please enter 'yes' or 'no'.");
      specialFunc();
    }
  }

  lowercaseFunc();
  uppercaseFunc();
  numericFunc();
  specialFunc();
  
  if (charArray.length === 0){
  alert("You must choose at least one character type, please select again.");
  charType();
  }
  else{return charArray;}
}


// Function to get a random element from an array
function getRandom(inputArray) {
  var randomCharacter = Math.floor(Math.random() * inputArray.length);
  console.log(inputArray[randomCharacter]);
  return inputArray[randomCharacter];
}



// Function to prompt user, link password length and character selection functions, concatenate
// password from random character selection function and output created password onto screen.
function getPasswordOptions() {
alert("Welcome to password generator! Please click 'OK' to continue.");
alert("Please answer the following five questions about your password length and the type of characters you want to include in it (Lowercase, Uppercase, Numeric, Special Characters).");
var passLength = length();
alert("You chose " + passLength + " characters.");
var characterArray = charType();
var password = [];
for (var i=0; i < passLength; i++){
 var passwordCharacter= getRandom(characterArray);
 password = password.concat(passwordCharacter);
}
console.log(passLength);
console.log(characterArray);
console.log(password);
var passwordText = document.querySelector('#password');

passwordText.value = password;
}

// Varaible created for button using the #generate element
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button, when the button is clicked the initial user prompt function begins
generateBtn.addEventListener('click', getPasswordOptions);
