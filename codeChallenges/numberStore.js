// Write a JavaScript program that defines a variable that stores a Number. The program should print out the String "even" if the Number is even, and the String "odd" if the Number is odd. Hint: You may need to do some extra research on the remainder operator (%) to solve this challenge.

var number = 4

if ((number % 2) > 0){
    console.log("Stored number is odd!")
}
else {
    console.log("Stored number is even!")
}