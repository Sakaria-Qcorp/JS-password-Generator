
// Assignment Code
var generateBtn = document.querySelector("#generate");
//** Creating variable being used to creat password.
var symbolChar = "!@#$%^&*(-+";
var numberChar = "12345678910";
var lowerCaseAlph = "abcdefghijklmnopqrstuvwxyz";
var upperCaschar = "ABCDEFGHIJKLMNOPQTRSTU VWXYZ";
var Combostring;

 var lenghtselect = "";
 var length;
 var isNumbers;
 var iscCapletters;
 var islowerletters;
 var isSymbols;


 
function writePassword() {
  
  var password = takingUI();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// ** Collecting the length of the password from the user.
 function takingUI() {
   
  length = userLengthchoice();

   
   if (length < 8 || length > 128) {
     alert("please enter a valid Length");
      return;
     
    }

  if(length == null || length == undefined){
       alert("Please enter a valid length");
       return;
   
      }
      //console.log(length); 

     UserChoiceCharacters();

     if(!isNumbers && !iscCapletters  && !islowerletters && !isSymbols ){
       alert("There were no options Selected for the password. Please Pick an option to create a password")
      return;
     }
     
     //console.log(length);
     //console.log(isSymbols,iscCapletters,islowerletters, isSymbols, length);

      return generatePassword();
}


 

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
 function userLengthchoice() {

  lenghtselect = prompt("please enter a number between 08 and 128 for the password length?");
  return lenghtselect;
 }  


 //charactersSelect();

 /*const randomFunc ={

  lower: getRandomletter,
  upper: getRandomUppercase,
  symbol: getRandomSymbol,
  number: getRandomNumber
 };
*/
/* 
 function getRandomSymbol() {

  var symbolChar = "!,@,#,$.%,^,&,*,(,-,+";

  return symbolChar[Math.floor(Math.random() * symbolChar.length)];
   
 }
 function getRandomNumber() {
   var numberChar = [1,2,3,4,5,6,7,8,9,10];

  return numberChar[Math.floor(Math.random() * numberChar.length)];
   
 }
 function getRandomletter() {
  var alphabetChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  return alphabetChar[Math.floor(Math.random() * alphabetChar.length)];
   
 }
 function getRandomUppercase(){
  
  return upperCaschar[Math.floor(Math.random() * upperCaschar.length)];

}*/


function generatePassword() {
  var passW;

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

 for (var i =0; i < length; i++) {
   
   var randomNumber = Math.floor(Math.random()* Combostring.length);
   passW += Combostring[randomNumber];
 }
 return passW;

  
}



// Write password to the #password input


 //Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
