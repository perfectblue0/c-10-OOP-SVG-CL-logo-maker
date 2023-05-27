// packages and classes needed for the application
const inquirer = require("inquirer");
const fs = require("fs");
const { Square, Circle, Triangle } = require('./lib/shapes');

// Array of questions for user
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape logo',
        choices: ['Square', 'Circe', 'Triangle'],
        validate: (res)=>{if(res){return true} else {return "please enter response to continue"}}
    },
    {
        type: 'input',
        name: 'text',
        message: 'Type three letters for logo',
        validate: (res)=>{if(res.length == 3){return true} else {return "please enter 3 letters to continue"}}
    },
    {
        type: 'input',
        name: 'colorText',
        message: 'Choose color or hexadecimal number for text',
        validate: (res)=>{if(res){return true} else {return "please enter response to continue"}}
    },
    {
        type: 'input',
        name: 'colorShape',
        message: 'Choose color or hexadecimal number for shape',
        validate: (res)=>{if(res){return true} else {return "please enter response to continue"}}
    }
];