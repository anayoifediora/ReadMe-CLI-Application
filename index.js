// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = () => {
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
            message: 'Please pick a license from the options listed below:',
            name: 'license',
            choices: ['MIT License', 'Boost Software License', 'ISC License', 'IBM Public License Version 1.0'],
        },
        {
            type: 'list',
            message: 'Please select the corresponding license badge from the options listed:',
            name: 'licenseBadge',
            choices: ['License-MIT-yellow', 'License-Boost_1.0-lightblue', 'License-ISC-blue', 'License-IPL_1.0-blue'],
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
           
const generateReadMe = ({title, description, applink, contents, installation, usage, credits, license, licenseBadge, contribution, tests}) => 
`# **${title}** 
${displayBadge(licenseBadge)}
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
This project is licensed under the ${license}.
## Contributing
${contribution}
## Tests
${tests}
## Questions`;
const displayBadge = (licenseBadge) =>  {
    if (licenseBadge !== "None") {
        return `[![License: MIT](https://img.shields.io/badge/${licenseBadge}.svg)](https://opensource.org/licenses/MIT)`
      }
      return "";
    }
const init = () => {
    questions()
        .then((answers) => {
        fs.writeFile(`${answers.title}.md`, generateReadMe(answers), (err) =>
          err ? console.log(err) : console.log('Successfully created Readme file')
        );
        })

}


init();

