// Homework Assignment 2

// First and foremost var just should not be used anymore, it allows you to do a lot of poor programming practices. For instance you initialize a variable, log it to the console and it will come up undefined, if you would use let or const to initialize a variable and logged the value it would crash your script. 
//Example
console.log(age); //undefined 
var age = 27;

console.log('End of Script');
//With let or const
console.log(name);//Uncaught reference error
let name =  "Matt";

console.log("End of script");
//When you use let or const is creates block scope {}, whereas is you used var inside of a function you would be able to access its value on the global scope. So by using let and const you can avoid a lot of program errors because it gives you better control of your variables. 
//You would use const when you know the value of a variable will change overtime wheras with const you assign it to the variable whose values will not change. Not to be confused with objects and arrays, the values in the array and object can change, just not the name your referencing it with.

const person = {
    name: "Matt",
    age: 31,
    isMarried: true
}
person.age = 32; //We are declaring the person object with the age of 31, but updating one of the keys, this is viable 

let firstName = "Danelle";
let lastName = "Smith";

console.log(`${firstName} ${lastName}`);//Danelle Smith

lastName = "Cook";

console.log(`${firstName} ${lastname}`)//Danelle Cook


