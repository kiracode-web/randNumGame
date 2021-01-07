alert("You have to find a number between 1 and 100")
function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let minNum = 1;
let maxNum = 100;
let randNum = getRandNum(minNum, maxNum);
let userNum;
let attempts = 8;

while(attempts>0 && userNum!=randNum) {
   userNum = prompt("Enter your number", '');
   if(userNum>randNum) {
      attempts--;
      alert("Your number is bigger\nYour attempts: " + attempts);
   }
   else if(userNum<randNum) {
      attempts--;
      alert("Your number is smaller\nYour attempts: " + attempts);
   }
   else if(userNum==randNum) {
      alert("Congratulation! You won :)");
   }
}
if(attempts==0 && userNum!=randNum) {
   alert("You lose :/");
}