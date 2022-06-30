// Assignment Code
  var generateBtn = document.querySelector("#generate");
// List of numbers, special characters, uppercase and lowercase
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var specialCharacters = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '/', ':', ';', "'", '"', '<', '>', ',', '.', '?']
   

// Write function for password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  function generatePassword(){

// Prompt = length
  let length = prompt("How many characters do you want in your password? Choose between 8 and 128");
  console.log(length)

// Create var to hold answer to prompt
  var potentialChoicesArray = []

// Conditional if else statement to ensure user answer to prompt is within range
  if (length >= 8 && length <= 128) {
    console.log("Range correct");
  } else {
    window.alert("Not within range. Please choose a number between 8 and 128")
    prompt("Try again");
    console.log("Not within range");
    var potentialChoicesArray = [];
  }

// Confirm = lowercase, uppercase, numeric, special characters
  let lowercase = confirm("Do you want to include lowercase letters?");
  console.log(lowercase)
  let uppercase = confirm("Do you want to include uppercase letters?");
  let numeric = confirm("Do you want to include numbers?");
  let special = confirm("Do you want to include special characters?");

// Conditional if else to validate user answers and combine all arrays in 1 array
  if(uppercase){
    potentialChoicesArray = [...potentialChoicesArray,...upperCaseArray];
  }
  if(lowercase){
    potentialChoicesArray = [...potentialChoicesArray,...lowerCaseArray];
  }
  if(numeric){
    potentialChoicesArray = [...potentialChoicesArray,...numbers];
  }
  if(special){
    potentialChoicesArray = [...potentialChoicesArray,...specialCharacters];
  } else {
    console.log("Range not correct")
  }
   
// Function to randomly capture user determined # of characters from the combined array
  var rando = [];

  function random_item(potentialChoicesArray){
      for(let i = 0; i < length; i++){
      rando.push(potentialChoicesArray[Math.floor(Math.random()* potentialChoicesArray.length)]); 
      }
      return rando;
  }

// Change function to a string to generate and return password
  random_item(potentialChoicesArray);
  return rando.join("");
}
