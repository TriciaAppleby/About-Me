'use strict';

var name = prompt ('What is your name?');
console.log('name'+ name);
alert ('Hello '+ name +'! Please answer yes or no,');

var question = prompt('ask a question here!');
var sanitizedAnswer = question.toUpperCase().trim();

if (sanitizedAnswer ==='Y' || sanitizedAnswer ==='YES') {
    alert('No way!!');
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === 'NO') {
    alert('Good job!');
}

var nextquestion = prompt('ask question here!');
var sanitizedAnswer = nextquestion.toUpperCase().trim();

if (sanitizedAnswer === 'Y'|| sanitizedAnswer === 'YES'){
    alert ('yes!')
}
else if (sanitizedAnswer === 'N' || sanitizedAnswer === 'NO'){
    alert ('no!')
}