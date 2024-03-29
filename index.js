const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const outputFolder = 'output';

// 1. Come up with README default file structure
// 2. Decide which questions you want to ask
// 3. Generate README.md file based on the user input
// 4. Write a README.md file

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Describe your project',
  },

  {
    type: 'input',
    name: 'installation',
    message: 'How can the user install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should the project be used?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license.',
    choices: ['MIT', 'BSD', 'ETC', 'ETC', 'ETC'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to this project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How should the user test your project?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'checkbox',
    name: 'badges',
    message: 'Select badges to add:',
    choices: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Node.js',
      'Figma',
      'DevTools',
      'npm',
      'Yarn',
      'React.js',
      'React Native',
      'Angular',
      'Tailwind CSS',
      'Bootstrap',
      'jQuery',
      'jQuery UI',
      'TensorFlow',
      'MongoDB',
      'Mongoose',
    ],
  },
];

// Create outPut folder if necessary
// if (!fs.existsSync(outputFolder)) {
//   fs.mkdir(outputFolder);
// }

// function to write README file
function writeToFile(folder, fileName, data) {
  const filePath = path.join(folder, fileName);
  fs.writeFileSync(filePath, data);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile(outputFolder, 'README.md', markdown);
      console.log(
        'README.md has been successfully generated and saved to the "output" folder!'
      );
    })
    .catch((err) => console.error(err));
}

// function call to initialize program
init();
