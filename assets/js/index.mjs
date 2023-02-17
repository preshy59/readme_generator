import inquirer from 'inquirer';
import fs from "fs/promises";

const questions = await inquirer
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
        message: "Enter your project description",
      },
      {
        type: 'input',
        name: 'usage',
        message: "Enter your project description",
      },
    {
      type: 'input',
      name: 'contributing',
      message: "What's your last name",
     
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does the application covered?',
        choices: ['Apache 2.0 ', 'The MIT License', 'Open Database License (ODbL)'],
        filter(val) {
          return val.toLowerCase();
        },
      },
    {
        type: 'input',
        name: 'test',
        message: "Enter your project description",
      },
      {
        type: 'input',
        name: 'questions',
        message: "Enter your GitHub user name description",
      },
])



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