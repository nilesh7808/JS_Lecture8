// let newArray = [1, 2, 3, ["a", "b", "c", ["Nilesh", "Raj"]]];
// newArray[3][3][0]


// let fruits = ["Apple", "Guava", "Papaya", "Banana", "Litchi"];
// console.log(fruits);

// // push method to insert element into the last position
// fruits.push("Mango");
// console.log(fruits);
// // you can also push multiple element
// fruits.push("Cherry", "Kivi");
// console.log(fruits);

// //delete last element from the array
// fruits.pop();
// console.log(fruits);

// //insert element to the first position or in the starting and also can enter multiple values in the begining
// fruits.unshift("Water Melon");
// console.log(fruits);

// //delete starting element from the array
// fruits.shift();
// console.log(fruits);

// More array Methods


// concatinating two array
let arr1 = [1, 2, 3, 4];
let arr2 = ["red", "yellow", "Green"];
let arr3 = arr1.concat(arr2);
console.log(arr3);

// includes

let colors = ['red', 'green', 'yellow', 'pink'];
console.log(colors.includes('green'));


// Destructive function

colors.reverse();
console.log(colors);