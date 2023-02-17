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