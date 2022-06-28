// Assignment Code
var generateBtn = document.querySelector("#generate");
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var lowerCaseArray = ["q", "w", "e", "r", "t", "y"]
var upperCaseArray = ["Q", "R", "E", "T"]
var specialCharacters = ["!", "$", "*"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
//  Your CODE goes here
debugger
// PseudoCode
// prompt = length
  let pwdLength = prompt("how many characters");
  console.log(pwdLength)
  var potentialchoicesArray = []
  if(pwdLength >= 8 && pwdLength <= 128 ){
    console.log("Range correct");
    let lowercase = confirm("Do you want to include lowercase letters?");
    console.log(lowercase)
    let uppercase = confirm("Do you want to include uppercase letters?");
    let numeric = confirm("Do you want to include numbers?");
    let special = confirm("Do you want to include special characters?");
    if(uppercase){
      potentialchoicesArray = [...potentialchoicesArray,...upperCaseArray];
    }
    if(lowercase){
      potentialchoicesArray = [...potentialchoicesArray,...lowerCaseArray];
    }
    if(numeric){
      potentialchoicesArray = [...potentialchoicesArray,...numbers];
    }
    if(special){
      potentialchoicesArray = [...potentialchoicesArray,...specialCharacters];
    } 
    
  }
  else{
    console.log("Range not correct")
  }


// confirm = lowercase, uppercase, numeric, special characters
  // let numbers = confirm("Do you want numbers");
  // console.log(numbers);
// create var to hold answer to prompt/confirm
// function to validate user answers
// if statement and equality operators
  // if(numbers){

  // }

// list of numbers, special characters, uppercase and lowercase
  // arrray
  // combine all arrays in 1 array
  // (math.random()) randomly choose characters
  // create a string set equal to password var
// generate random password
// return password

//   return password;
}