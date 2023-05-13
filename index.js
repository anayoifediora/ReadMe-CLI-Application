// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];

const generateReadMe = ({title, description, contents, installation, usage, license,
                        contribution, credits, tests}) => `# ${title}

## Description
    ${description}
## Table of Contents
    ${contents}

## Installation 
   ${installation}
## Usage
   ${usage}
## Credits
   ${credits}
## License
   ${license}
## Contributing
    ${contribution}
## Tests
   ${tests}
## Questions.
`
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
            type: 'input',
            message: 'Please provide a license name',
            name: 'license',
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
            message: 'please provide an examples on how to test your application',
            name: 'tests',
        }
    ])

    .then((response) => 
    
        fs.writeFile('readme.md', generateReadMe(response), (err) =>
          err ? console.log(err) : console.log('Successfully created Readme file')
        ));

// Function call to initialize app.
