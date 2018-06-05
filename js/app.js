'use strict';

var answer = prompt('Do you think yes or no?');
var sanitizedAnswer = answer.toUpperCase().trim();

else if (sanitizedAnswer === 'Y'
    || sanitizedAnswer === 'YES') {
    alert(answer + ' yes!');

else if (sanitizedAnswer === 'N'
     || sanitizedAnswer === 'NO') {
    alert(answer + ' means no!');