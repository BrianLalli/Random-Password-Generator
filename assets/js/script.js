// Assignment Code
  var generateBtn = document.querySelector("#generate");
// List of numbers, special characters, uppercase and lowercase
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var specialCharacters = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '/', ':', ';', "'", '"', '<', '>', ',', '.', '?']
   

// Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}

// Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  function generatePassword(){}

// Adding debugger to test code
  // debugger


// Prompt = length
  let pwdLength = prompt("How many characters do you want in your password? Choose between 8 and 128");
  console.log(pwdLength)
// Create var to hold answer to prompt
  var potentialChoicesArray = []

// Conditional if else statement to ensure user answer to prompt is within range
  if (pwdLength >= 8 && pwdLength <= 128) {
    console.log("Range correct");
  } else {
    window.alert("Not within range. Please choose a number between 8 and 128")
    prompt("Try again");
    var potentialChoicesArray = []
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
   
// function to randomly capture a character from the combined array
  function random_item(potentialChoicesArray)
  {
    
  return potentialChoicesArray[Math.floor(Math.random()* potentialChoicesArray.length)];
      
  }

  // var items = [potentialChoicesArray];
  console.log(random_item(potentialChoicesArray));

// for loop to run through the array and randomly keep choosing characters
  for(let i=0; i === length; i++){
    console.log(potentialChoicesArray);
  }


  // potentialChoicesArray[Math.floor(Math.random() * potentialChoicesArray.length)];










  
// create a string set equal to password var
// generate random password
// return password

//   return password;
