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
  let userInput = prompt("Choose a password length of at least 10 characters but no more than 64.");

  if (userInput > 9 && userInput < 65) {
  var passwordLength = userInput;
  console.log(passwordLength);
  return passwordLength;
  } else {
  alert("Incorrect entry. Please choose a value of at least 10 but no more than 64.");
  length();
  }
}


// Function for user character selection
function charType() {
  var charArray=[];
  var zero={};
  let lowercase = confirm("Do you want to include lowercase characters in your password?");
  if (lowercase = true){charArray= charArray.concat(lowerCasedCharacters);
  }else{charArray= charArray.concat(zero)}
  let uppercase = confirm("Do you want to include uppercase characters in your password?");
  if (uppercase = true){charArray= charArray.concat(upperCasedCharacters);
  }else{charArray= charArray.concat(zero)}
  let numeric = confirm("Do you want to include numeric characters in your password?");
  if (numeric = true){charArray= charArray.concat(numericCharacters);
  }else{charArray= charArray.concat(zero)}
  let special = confirm("Do you want to include special characters in your password?");
  if (special = true){charArray= charArray.concat(specialCharacters);
  }else{charArray= charArray.concat(zero)}
  
  if (charArray.length === 0){
  alert("You must choose at least one character type, please select again.");
  charType();
  }
  else{return charArray;}
  }

// Function to prompt user for password options
function getPasswordOptions() {
  alert("Welcome to password generator! Please click 'OK' to continue.");
  alert("Please answer the following five questions about your password length and the type of characters you want to include in it (Lowercase, Uppercase, Numeric, Special Characters).");
  length();
  var passLength= length();
  alert("You chose " + passLength + " characters. ");
  var Characters = charType();
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element (ie. the generate id in the HTML file)
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

getPasswordOptions();
console.log(passwordLength);
console.log(charArray);