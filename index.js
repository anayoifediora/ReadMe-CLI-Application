// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];

const promptUser = () => {
    return inquirer.prompt([
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
};    
           
const generateReadMe = ({title, description, applink, contents, installation, usage, credits, license, contribution, tests}) => 
`# **${title}** 
## Project Description
${description}
## Link to Webpage
[A link to the webpage can be found here] (${applink})
## Table of Contents
- [${contents[0]}](#${contents[0].toLowerCase()})
- [${contents[1]}](#${contents[1].toLowerCase()})
- [${contents[2]}](#${contents[2].toLowerCase()})
- [${contents[3]}](#${contents[3].toLowerCase()})
- [${contents[4]}](#${contents[4].toLowerCase()})
- [${contents[5]}](#${contents[5].toLowerCase()})

## Installation 
${installation}
## Usage
${usage}
## Credits
${credits}
## License
${license} ${displayBadge(license)}
## Contributing
${contribution}
## Tests
${tests}
## Questions`;
const displayBadge = (license) =>  {
    let mitLicense = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    let boostLicense = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    let iscLicense = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    let ibmLicense = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';
    
    if (license === 'MIT License') {
         return mitLicense
    }  else if (license === 'Boost Software License') {
        return boostLicense;
    }  else if (license === 'ISC License') {
        return iscLicense;
    }  else if (license === 'IBM Public License Version 1.0') {
        return ibmLicense;
    } else 
    return;
}
const init = () => {
    promptUser()
        .then((answers) => {
        fs.writeFile(`${answers.title}.md`, generateReadMe(answers), (err) =>
          err ? console.log(err) : console.log('Successfully created Readme file')
        );
        })

}



init();
