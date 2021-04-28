// Conditionals

// let num = 10;

// if (num > 5) {

//     console.log("Number is Greater than 5");

// }
// if (num > 6) {
//     console.log("Number is also greater than 6");
// }

// if (num > 12) {
//     console.log("Number is greter than 12.");

// } else {
//     console.log("Number is less than 12");
// }

// let a = 2;
// let b = 13;
// let c = 4;

// if (a > b && a > c) {
//     console.log("a is the greatest");
// } else if (b > c && b > a) {
//     console.log("b is the greatest");
// } else {
//     console.log("c is the greatest");
// }

let age = parseInt(prompt("Enter Your Age"));

if (age < 18) {
    alert("You are not eligible");

} else if (age >= 18 && age < 25) {
    alert("You can Enter to the club but cannot Drink");

} else if (age >= 25) {
    alert("You can enter into the club and can drink also");

}