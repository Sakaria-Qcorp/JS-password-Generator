
// Assignment Code
var generateBtn = document.querySelector("#generate");
//** Creating variables for characters being used to creat password.
var symbolChar = "!@#$%^&*(-+";
var numberChar = "12345678910";
var lowerCaseAlph = "abcdefghijklmnopqrstuvwxyz";
var upperCaschar = "ABCDEFGHIJKLMNOPQTRSTU VWXYZ";
var Combostring;

//These are variables being used for capturing the length of the password.
 var lenghtselect = "";
 var length;

 // These variable are booleans that will determine which characters will be include in the password.
 var isNumbers;
 var iscCapletters;
 var islowerletters;
 var isSymbols;


// Write password to the #password input 
function writePassword() {
  
  var password = takingUI();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// ** Collecting the length of the password from the user.
 function takingUI() {
    // applies conditions to the users lenght choice
  length = userLengthchoice();

   
   if (length < 8 || length > 128) {
     alert("please enter a valid Length");
      return;
     
    }

  if(length == null || length == undefined){
       alert("Please enter a valid length");
       return;
   
      }
      // applies conditions to the users character choice 

     UserChoiceCharacters();

     if(!isNumbers && !iscCapletters  && !islowerletters && !isSymbols ){
       alert("There were no options Selected for the password. Please Pick an option to create a password")
      return;
     }
  

      return generatePassword();
}


 //Prmpts user to input there password preferences and applies conditions.

 function UserChoiceCharacters(){

 var opening = confirm("please select OK on the options you want included in your password in the following windows."
+" The options are for numeric, special Charactors, uppercase letters and lowercase letters " +
"Please enter OK if you would like to continue or cancel to exit"
);

if (!opening) {
  alert("Please click the button to generate a password");
  return;
  
}

  isNumbers = window.confirm("Would you like to add numbers to your password enter Ok for yes and Cancel for No?");
  iscCapletters = window.confirm("Would you like to add uppercase letters to your password enter Ok for yes and Cancel for No?");
  islowerletters = window.confirm("Would you like to add lowercase letters to your password enter Ok for yes and Cancel for No?");
  isSymbols = window.confirm("Would you like to add symbols to your password enter Ok for yes and Cancel for No?")



  
 }
 //prompts user for the lenght choice
 function userLengthchoice() {

  lenghtselect = prompt("please enter a number between 08 and 128 for the password length?");
  return lenghtselect;
 }  

// creates the random password w/ users length and charater choices password

function generatePassword() {
  var passW = "";

if(isNumbers){
 Combostring += numberChar;

}
if(isSymbols){
  Combostring += symbolChar;
 
 }
 if(islowerletters){
  Combostring += lowerCaseAlph;
 
 }
 if(iscCapletters){
  Combostring += upperCaschar;
 
 }
//adds random characters to the password passed on the conditons above
 for (var i =0; i < length; i++) {
   
   var randomNumber = Math.floor(Math.random()* Combostring.length);
   passW += Combostring[randomNumber];
 }
 return passW;

  
}

 //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
