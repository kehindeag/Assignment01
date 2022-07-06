//STEP 1 1.	Convert the following highlighted identifiers to Camel Case notation:
//let someMonth;
//function theMonth()
//let currentMonth;
//let summerMonth;
//let myLibraryFunction;

//STEP 2.	Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression
//numeric literal: 12.4
//string literal: 'Say hello'
//Boolean literal: true
//null literal: null
//STEP 3.	Give me two examples of complex / variable expressions.
let calculateMile = 106 / 12;
//STEP 4.	Declare (but do not assign) 9 variables for the following identifiers:
let firstName;
let lastName;
let address;
let city;
let state;
let zipCode;
let yourAge;
let referralSource;
let mayWeContactYou;

//STEP 5.	Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
firstName = "Kenny";
city = "San Diego";
yourAge = 42;
//STEP 6. 6.	Create a variable. Add a number and a string and display the coerced result in the browser’s console window
let anyNumber = 12 + "all other number";
console.log(anyNumber);

//STEP 7.	Create two variables. For the first variable, add a Boolean and a string and display the coerced result. For the second variable, add a number and a Boolean and display the coerced result.
let isYes = true + "yes";
console.log(isYes);
let counterNumber = 12 + false;
console.log(counterNumber);

//STEP 8.	Is the following string literal valid? If not, how would you fix it?
let someString =
  "Who once said, Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.";
window.console.log(someString);

//STEP 9. 9.	Create a variable that produces a null value in the console window. Then, create a variable that produces an undefined value in the console window.

let a = parseInt(56);
let b = "hello";
console.log(parseInt(a) / b);

let newdefine;

console.log(newdefine);

//STEP 10.	Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.

document.write(typeof "hello ");

document.write(typeof 50);
document.write(typeof true);

let newObject;
document.write(typeof newObject);

//STEP 11 11.	Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:

//window.alert(
// "Hello" + " Kehinde Agboola" + ", welcome to the JavaScript class!");

//STEP 12.	Declare a variable called name and set it equal to your name. Substitute your name in the previous alert string with the variable instead.
//let myName;
//myName = "Kehinde Agboola";

//window.alert(` Hello ${myName}  , welcome to the JavaScript class!`);

//STEP 13.	Declare a variable called course and set it equal to “JavaScript”.
//Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

//let course = "JavaScript";

//window.alert(`${course}`);

//STEP 14.	Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

//let welcome = `Hello Kehinde Agboola. \nWelcome to the JavaScript class!`;

//window.alert(welcome);

//STEP 15.	Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.

//myName = "Kehinde Agboola";

//let welcome = `Hello ${myName}. \nWelcome to the JavaScript class!`;

//window.alert(welcome);

//16.	Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

//myName = "Kehinde Agboola";
// course = "JavaScript";

// welcome = `Hello ${myName}. \nWelcome to the ${course} class!`;

//window.alert(welcome);

//STEP 17.	Declare a variable called x and assign it a value of 10. Declare a variable called y and assign it a value of 20.  the sum of those two numbers in the console window.

//let x = 10;
//let y = 20;

//console.log(x + y);

//STEP 18.	Declare a variable called x and assign it a value of 20. Add and assign 20 to that variable and display the result in the console window.The result should be 40.

//let x = 20;

//x += 20;

//console.log(x);

//STEP 19.	Declare a variable called x and assign it a value of 20.Multiply and assign 5 to that variable and display the result in the console window. The result should be 100.

//let x = 20;

//x *= 5;

//console.log(x);

//STEP 20.	Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.Divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.

// = 2;

//x /= 1;

//console.log(x);

//STEP 21.	Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window

let ab = 10;

let ba = "10";

console.log(ab == ba);

//STEP 22.	Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.

let abc = 102;

let bac = "102";

console.log(abc === bac);
