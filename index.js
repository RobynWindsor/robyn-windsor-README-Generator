const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
    message: 'What was your motivation?',
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
      'three.js',
      'd3.js',
      'TensorFlow',
      'MongoDB',
      'Mongoose',
      'Netlify',
    ],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
      console.log('README.md has been successfully generated!');
    })
    .catch((err) => console.error(err));
}

// function call to initialize program
init();
