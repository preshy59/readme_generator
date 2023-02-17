import inquirer from 'inquirer';
import fs from "fs/promises";


// arrays of object that generate multiple question for user input
let {title, description, installation, usage, contributing,license, test, username, email} = await inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: "Enter your project Title",
      },
    {
      type: 'input',
      name: 'description',
      message: "Enter your project description",
    },
     {
        type: 'input',
        name: 'installation',
        message: "what are the steps involved when installing the your project?",
      },
      {
        type: 'input',
        name: 'usage',
        message: "what are the usage information of your project?",
      },
    
      {
        type: 'input',
        name: 'username',
        message: "What's your GitHub userName?",
       
      },
      {
        type: 'input',
        name: 'email',
        message: "What's your email address?",
       
      },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your application covered?',
        choices: ['Apache 2.0 ', 'The MIT License', 'Open Database License (ODbL)'],
        filter(val) {
          return val.toLowerCase();
        },
      },
    {
        type: 'input',
        name: 'test',
        message: "Enter your test procedure?",
      },
      
])


// function to display the badge of the license the user selected
function generateLicenese(license) {

    if (license === "Apache 2.0" ) {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        
    }
    else if (license === "The MIT License") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        
    }
    else if (license === "Open Database License (ODbL)") {
        return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"
        
    }
     else {
        return "Invalid selection"
    }
    
}