var rs = require('readline-sync');

var fNum1 = rs.question('1st Number: ');
var fNum2 = rs.question('2nd Number: ');
var fNum3 = rs.question('3rd Number: ');
var fNum4 = rs.question('4th Number: ');

//Calculate the factorial of the first number
var fac = 1;
for(i = 1; i <= fNum1; i++){
    fac *= i;
}
console.log("Factorial of the 1st number is = ", fac);

//Calculate the sum of all the digits of the second number.
var sum = 0;
while(fNum2){
  sum += fNum2 % 10;
  fNum2 = Math.floor(fNum2/10);
}
console.log("The sum of all the digits of the second number is = ", sum);

//For the third number given as an input, show the reversed number as an output.

function reversedNum(num) {
    return (
      parseFloat(
        num
          .split('')
          .reverse()
          .join('')
      ) 
    )                 
  }
var rNum3 = reversedNum(fNum3);

console.log("The reverse of the srd number is = ", rNum3);

//For the fourth number given as an input, check whether that number is a Palindrome or not

function Palindromes(number) {
    var intToStr = number.toString();
    for(var i = 0; i< intToStr.length/2; i++){
        if(intToStr[i] != intToStr[intToStr.length - 1 - i]){
            return false;
        }
    }
    return true
};
var ans = Palindromes(fNum4);
console.log("Is the 4th number a palindrome(True/False)? =  ", ans);