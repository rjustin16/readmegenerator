const questions = require("./questions");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt(questions).then((input) => {
  fs.writeFile("README.md",
`## Title
${input.title}node
## Description
${input.description}
## Installation
${input.installation}
## Usage
${input.usage}
## Contribution
${input.contribution}
## Project Testing
${input.test}
## License
![License](https://img.shields.io/badge/License-${input.license}-blue)
## Gihub Username
[Github](https://github.com/${input.github})
## Email Contact
${input.email} `,function (){console.log("Readme Generated!")}
  );
});
