/* 
    functions
        - a block of code
        - can be named and stored
        - it will be executed when we call its name

    library functions: pre-written functions
    user-defined functions: functions created by the users/developers
*/

// library function
// console.log('hello world');

/*
    Variables
        - variables are labels that points to the memory where we can store a value.
*/

// references
// age = 19;

// variables
// keywords: var, let, const
// ES6: Ecma Script 6(2015)

// scope: var, let, const
// scope: how much the variable is visible to the rest of the code

// var and let -> variables -> changeables
// var age = 19;

// age = 25;

// console.log(age);

// let age = 19;

// age = 25;

// console.log(age);

// const age = 19; // value is constant
// // once initialized, we cannot change its value

// age = 25;

// console.log(age);

// var -> function scoped
// var age = 25;

// var age = 27; // reinitialize and reassignment can be done using var

// console.log(age);

// because let is a block scoped
// let age = 25;

// let age = 27; // reinitialize cannot be done using let

// console.log(age);

// main block 

// {
//     // this is block A
//     // let block scoped
//     // var function scoped
//     var num1 = 10;

    
// }

// console.log(num1);

// java -> statically typed language
// javascript -> dynamically typed language

/*
    Data Types:

        Tells the type of data we can store in a variable.

    number
        25, 38, 267, 34.5, 23.124, -23

    boolean
        true or false

    string
        sequence of characters
        alphabets: a, b, c, A, B, C
        numbers: 0, 1, 2, ....
        symbols: $, %, #, @...

    Object:
        (array)
        []
        data structure to store more than one value

        object or json object or javascript object
        {}
        data structure to store more than one value

*/

// let age = 25;

// console.log(typeof age);

// let isEligible = true; // boolean

// isEligible = 'Yes'; // string

// console.log(typeof isEligible);

// // let char = 'c';
// // let word = "apple";
// let sentence = `apple is a fruit`; // string literal

// console.log(typeof sentence);

// array: []
// let numbers = [3, 4, 5, 6];

// let arr = [3, 'sathish', 56.45, true, [45, 65, 75]];
//           [0].   [1].     [2].    [3].  [4]

// // console.log(typeof arr);
// console.log(arr);

// label: key
// value

// key-value pairs
// let obj = {
//     rno: 3,
//     name: 'sathish',
//     score: 56.45,
//     isEligible: true,
//     attempts: [45, 65, 75]
// }

// console.log(obj);

/*
    operators:
        symbols used to perform operations on the variables or values
    
    arithmetic operators
        + addition
        - subtraction
        / division
        % modulo division
        * multiplication
        ** exponent
        ++ increment
        -- decrement

    relational operators
        < less than
        > greater than
        <= less than or equal to
        >= greater than or equal to
        == double equal to (comparison)
        === triple equal to (comparison with type)
        != not equal to (comparison)
        !== not double equal to (comparison with type)

    result is always a boolean (either true or false)

    assignment operator
        =

    logical operators

    && logical and
    || logical or
    ! logical not
*/

// 11, -1, 0.8, 5, 30 
// console.log(5 + 6, 5 - 6, 5 / 6, 5 % 6, 5 * 6);


// console.log(5 ** 0.5);

// let x = 10;

// x--; // x = x - 1

// console.log(x);

// x++ post increment operator (process first, increment next)
// ++x pre increment operator (increment first, process next)
// console.log(x++, x);

/*
    Eligibility:

    1. Age of the person should be atleast 18.
*/

// let age = 17;

// console.log(age >= 18);
// greater than or equal to
// 25 > 18 or 25 == 18
// true or false
// true

// true -> eligible to vote
// false -> not eligible to vote

/*
    Eligibility:

    1. Age of the person should be atleast 18.
    2. The person should have one of the following ID's:
        a. Aadhar Card
        b. Voter ID
*/

// let age = 17;
// let hasAadhar = true;
// let hasVoterID = true;

// // console.log(age >= 18); // age is atleast 18 (false)
// // console.log(hasAadhar == true); // has an aadhar card (true)
// // console.log(hasVoterID == true); // has a voter ID (true)

// console.log(age >= 18 && (hasAadhar == true || hasVoterID == true));

// let age = 17;

// console.log(!(age >= 18));

// Conditional Statements
// if...else


// let age = 19;
// let hasAadhar = true;
// let hasVoterID = true;

// if (age >= 18 && (hasAadhar == true || hasVoterID == true)) {
//     // if the condition is true
//     // do this
//     console.log('You are eligible to vote!');
// } else {
//     // if the condition is false
//     // do this
//     console.log('You are not eligible to vote!');
// }

// conditional statements

/*
    1. if statement
    2. if...else statement
    3. multiple if...else if...else statement
    4. nested if...else statement
*/

// /*
//     Problem:

//     Give a number, check whether the number is a positive number
// */

// let number = 5;

// if (number > 0) {
//     console.log('positive number');
// }

// /*
//     Problem:

//     Give a number, check whether the number is a positive number or negative number.
// */

// let number = -5;

// if (number > 0) {
//     console.log(number, 'is a positive number');
// } else {
//     console.log(number, 'is a negative number');
// }

/*
    Problem:

    Give a number, check whether the number is a positive number or negative number or a zero.
*/

// let number = 0;

// // nested if...else
// if (number > 0) {
//     console.log(number, 'is a positive number');
// } else {
//     // definitely the number is not a positive number
//     // the number can either be a negative number or a zero
//     if (number < 0) {
//         console.log(number, 'is a negative number');
//     } else {
//         // the number is not a negative number
//         // that leaves us with only possibility that
//         // the number is a zero
//         console.log(number, 'is a zero');
//     }
// }

// let number = -5;

// // multiple if...else
// if (number > 0) {
//     console.log(number, 'is a positive number');
// } else if (number < 0) {
//     console.log(number, 'is a negative number');
// } else {
//     console.log(number, 'is a zero');
// }

// switch...case statements
// let number = -5;

// switch (number > 0) {
//     // cases -> condition results
//     case true:
//         console.log(number, 'is a positive number');
//         break;
//     case false:
//         console.log(number, 'is a negative number');
//         break;
// }

// let number = 0;

// switch (number > 0) {
//     case true:
//         console.log(number, 'is a positive number');
//         break;
//     case false:
//         switch (number < 0) {
//             case true:
//                 console.log(number, 'is a negative number');
//                 break;
//             case false:
//                 console.log(number, 'is a zero');
//                 break;
//         }
//         break;
//     // default:
//     //     console.log('neither a postive nor a negative number');
// }

// conditional operator or ternary operator
// ?:


// one-liner
// let number = 5;

// number > 0 ? console.log(number, 'is a positive number') : console.log(number, 'is a negative number');

// let number = -5;

// number > 0 ? console.log(number, 'is a positive number') : (
//     number < 0 ? console.log(number, 'is a negative number') :
//         console.log(number, 'is a zero')
// )

// Problem: print 'hello' 3 times
// looping statements: while, for, do...while
/*
    running condition:
        count != 4 or count < 4 or count <= 3
                    count = 1, count = 2, count = 3

    stopping condition:
        count == 4
*/

// while loop
// let count = 1;
// while (count <= 3) {
//     console.log('hello');
//     count++;
// }

// for loop 
// for (let count = 1; count <= 3;count++) {
//     console.log('hello');
// }

// let count = 1;
// while (count <= 3) {
//     console.log('hello');
//     count++;
// }

// do...while loop
// let count = 4;
// do {
//     console.log('hello');
//     count++;
// } while (count <= 3);

// functions
// a block of code that gets executed when we call it.

// library functions: pre-written functions

// console.log(Math.sqrt(5));

// user defined functions
// create a function to add two numbers
// function add(x, y) {
//     console.log(x + y);
// }

// add(5, 6);

// function add(x, y) {
//     let total = x + y;
//     return total;
// }

// console.log(add(5, 6));

// function add(x, y) {
//     console.log(x + y);
// }

// add(5, 6);

/*
    function types:

        1. function with arguments and without return type
        2. function with arguments and with return type
        3. function without arguments and without return type
        4. function without arguments and with return type

    function types:

        1. named functions
        2. nameless functions or anonymous functions
        3. arrow functions
        4. IIFE - Immediately Invoked Function Expression
*/

// named functions
// function add(x, y) {
//     console.log(x + y);
// }

// add(5, 6);

// nameless functions or anonymous functions or function expression
// let add = function (x, y) {
//     console.log(x + y);
// }

// add(5, 6);

// arrow function
// let add = (x, y) => {
//     console.log(x + y);
// }

// add(5, 6);

// ES6 (2015)
// one liner function
// let add = (x, y) => console.log(x + y);

// add(5, 6);

// IIFE Function
// ((x, y) => {
//     console.log(x + y);
// })(5, 6);

// IIFE Function
// (function (x, y) {
//     console.log(x + y);
// })(5, 6);

// let numbers = [3, 6, 2, 4, 1, 5];
// //            [0][1][2][3][4][5]

// // console.log(numbers);
// // console.log(numbers[3]); // random accessing

// // to add a value to the end of the array
// numbers.push(7);

// numbers.unshift(8); // to insert a value at the beginning

// numbers.pop(); // to delete a value from the end
// numbers.pop();

// numbers.shift(); // to delete a value from the beginning

// splice method
// to either insert or delete a value from anywhere 
// 5 inbetween 6 and 2
// index: 2
// numbers.splice(2, 3, 5);

// console.log(numbers);

let numbers = [3, 6, 2, 4, 1, 5];