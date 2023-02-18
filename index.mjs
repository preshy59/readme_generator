import inquirer from 'inquirer';
import fs from "fs/promises";


// arrays of object that generate multiple question for user input
let {title, description, installation, usage, contributing, licenses, link, test, username, email} = await inquirer
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
        message: "what is need to install this your project?",
      },
      {
        type: 'input',
        name: 'usage',
        message: "what are the usage information of your project?",
      },
      {
        type: 'input',
        name: 'contributing',
        message: "How can others contribute to your ptoject?",
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
        name: 'licenses',
        message: 'What license does your application covered?',
        choices: ['Apache 2.0 ', 'The MIT License', 'Open Database License (ODbL)'],
        // filter(val) {
        //   return val.toLowerCase();
        // },
      },
    {
        type: 'input',
        name: 'test',
        message: "Enter your test procedure?",
      },
      {
        type: 'input',
        name: 'link',
        message: "Enter your project link?",
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

// generating dynamic html element
let readMeText =`

<a name="readme-top"></a>

<!-- PROJECT TITLE -->

<h3 align="center">${title}</h3>

 

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-description"> Project Description</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
         <li><a href="#installation">Installation</a></li>
          <li><a href="#run-locally">Run Locally</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#question">Questions</a></li>
    </ol>
</details>



<!-- DESCRIPTION OF THE PROJECT -->
## Project Description
${description}

### Built With

 * HTML
 * CSS
 * JAVASCRIPT
 * NODE.JS



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.



### Installation
${installation}

1. Clone the repo
   'sh
   git clone ${link}
   '
2. Install NPM packages
   'sh
   npm install
   '


<!-- TEST -->
## Run Locally
${test}
Clone the project

"bash
  git clone ${link}
"

Go to the project directory
"
bash
  cd my-project

"
Install dependencies
"
bash
  npm install
"

Start the server
"
bash
  npm run start
"
<!-- USAGE EXAMPLES -->
## Usage
${usage}

<!-- DEMO ON HOW THE PROJECT WORKS -->
## Demo

Insert gif or link to demo


<!-- CONTRIBUTING -->
## Contributing

${contributing}
1. Fork the Project
2. Create your Feature Branch ('git checkout -b feature/redme_generator')
3. Commit your Changes ('git commit -m 'Add some redme_generator'')
4. Push to the Branch ('git push origin feature/redme_generator')
5. Open a Pull Request

<!-- LICENSE -->
## License

Distrubed under the ${generateLicenese(licenses)}

<!-- QUESTIONS -->
## Questions

Email : ${email}
Profile : ${username}
Project Link: ${link}
`


await fs.writeFile("USERREADME.md", readMeText)

console.log("success!")