// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];


    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your application?',
        },
        {
            type: 'input',
            message: 'Please provide a short description of your application',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Also provide a link to your application',
            name: 'applink',
        },
        {
            type: 'checkbox',
            message: 'Please include a list of table of contents from the following options:',
            name: 'contents',
            choices: ['Installation', 'Usage', 'License', 'Contributing', 'Credits', 'Tests'],
        },

        {
            type: 'input',
            message: 'Please provide installation instructions',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'provide usage instruction for the application',
            name: 'usage',
        },
        {
            type: 'checkbox',
            message: 'Please provide a license from the options listed:',
            name: 'license',
            choices: ['MIT License', 'Boost Software License', 'ISC License', 'IBM Public License Version 1.0'],
        },
        {
            type: 'input',
            message: 'Any contributions from other developers? Please provide guidelines',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Please provide list of any creditors including github usernames',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'please provide examples/screenshots of how to test your application',
            name: 'tests',
        }
    ])
    
    .then((response) => {
           
         const generateReadMe = `
# **${response.title}** 
## Project Description
${response.description}
[A link to the webpage can be found here] (${response.applink})
## Table of Contents
- [${response.contents[0]}](#${response.contents[0].toLowerCase()})
- [${response.contents[1]}](#${response.contents[1].toLowerCase()})
- [${response.contents[2]}](#${response.contents[2].toLowerCase()})
- [${response.contents[3]}](#${response.contents[3].toLowerCase()})
- [${response.contents[4]}](#${response.contents[4].toLowerCase()})
- [${response.contents[5]}](#${response.contents[5].toLowerCase()})

## Installation 
${response.installation}
## Usage
${response.usage}
## Credits
${response.credits}
## License
${response.license}
## Contributing
${response.contribution}
## Tests
${response.tests}
## Questions`

    
        fs.writeFile(`${response.title}.md`, generateReadMe, (err) =>
          err ? console.log(err) : console.log('Successfully created Readme file')
        );
    })
// Function call to initialize app.

// function displayBadge() {
//     let mitLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
//     let boostLicense = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
//     let iscLicense = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
//     let ibmLicense = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    
//     if (response.license === 'MIT License') {
//         return mitLicense
//     }  else if (response.license === 'Boost Software License') {
//         return boostLicense;
//     }  else if (response.license === 'ISC License') {
//         return iscLicense;
//     }  else if (response.license === 'IBM Public License Version 1.0') {
//         return ibmLicense;
//     } else 
//     return;
// }
