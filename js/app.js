'use strict';

var name = prompt ('What is your name?');
console.log('name'+ name);
alert ('Hello '+ name +'! Please answer yes or no,');

var color = prompt('Is my favorite color pink?');
var sanitizedAnswer = color.toUpperCase().trim();

if (sanitizedAnswer ==='Y' || sanitizedAnswer ==='YES') {
    alert('No way!!');
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === 'NO') {
    alert('Good job!');
}

var age = prompt('Am I older than 40?');
var sanitizedAnswer = age.toUpperCase().trim();

if (sanitizedAnswer === 'Y'|| sanitizedAnswer === 'YES'){
    alert ('Really?!?')
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === 'NO'){
    alert ('Nope, only 35!')
}

var pets = prompt('Do I like cats?');
var sanitizedAnswer = pets.toUpperCase().trim();

if (sanitizedAnswer === 'Y'|| sanitizedAnswer === 'YES'){
    alert ('Yes!')
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === 'NO'){
    alert ('Sure do!')
}

var team = prompt('Do I like the Hawkeyes?');
var sanitizedAnswer = team.toUpperCase().trim();

if (sanitizedAnswer === 'Y'|| sanitizedAnswer === 'YES'){
    alert ('Of course')
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === 'NO'){
    alert ('Who doesnt?')
}

var usa = prompt('Have I ever been outside of the country?');
var sanitizedAnswer = usa.toUpperCase().trim();

if (sanitizedAnswer === 'Y'|| sanitizedAnswer === 'YES'){
    alert ('I wish!')
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === 'NO'){
    alert ('Nope')
}
