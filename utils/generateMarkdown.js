// function to generate markdown for README
function generateMarkdown(data) {
  const readmeContent = `# ${data.title};

## Description
${data.description}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Contributors
${data.contributing}

## Questions
For questions about the project, you can reach me at [GitHub: ${data.github}](https://github.com/${data.github}) or contact me via email at ${data.email}.

## License
This project is licensed under the ${data.license} License.`;

  return readmeContent;
}

module.exports = generateMarkdown;
