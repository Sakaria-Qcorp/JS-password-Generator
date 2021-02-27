// Assignment Code
var generateBtn = document.querySelector("#generate");
//var lenghtselect = Option1();
//var characterselect = Option2();
var alphabetChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numberchar = [1,2,3,4,5,6,7,8,9,10];
//var symbolchar = ["!,@,#,$.%,^,&,*,(,-,+"]
 
 function Option1() {
   lenghtselect = window.prompt("please enter a number between 08-128 ?");
   if (length < 8) {
     alert("Please enter a number greater than 8 and less than 128!")
     
   }
   else if(numberselect > 128){
     alert("Please enter a number greater than 8 and less than 128!")
   } else{
   return numberselect;}
  }

 function Option2() {
   characterselect= prompt( "Please enter N for numeric, S for special Charactors, U for uppercase, L for lowercase");
   if (characterselect.toUpperCase != "N" && characterselect.toUpperCase != "S"&& characterselect.toUpperCase != "U"&& characterselect.toUpperCase != "L") 
   {
    alert("please select a valid a character and the options are N for numeric, S for special Charactors, U for uppercase, L for lowercase ") 
   }
   else if( characterselect.toUpperCase === "N")
   {
     return characterselectl;

   }
   else if( characterselect.toUpperCase === "S")
   {
     return characterselect;

   }
   else if( characterselect.toUpperCase === "U")
   {
     return characterselect;

   }
   else if( characterselect.toUpperCase === "L")
   {
     return characterselect;

   }
   
 }
 function getRandomSymbol() {
  var symbolChar = "!,@,#,$.%,^,&,*,(,-,+"

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
 console.log(getRandomletter());
console.log(getRandomSymbol());
console.log(getRandomNumber());
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
