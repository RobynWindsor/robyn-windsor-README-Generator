// function to generate markdown for README
function generateMarkdown(data) {
  const generateBadge = (badge) => {
    const badges = {
      JavaScript:
        '![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)',
      HTML5:
        '![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)',
      CSS3: '![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)',
      'Node.js':
        '![Node.js](https://img.shields.io/badge/node.js-%23339933.svg?style=for-the-badge&logo=node.js&logoColor=white)',
      Figma:
        '![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)',
      DevTools:
        '![DevTools](https://img.shields.io/badge/devtools-%23424242.svg?style=for-the-badge&logo=chrome&logoColor=white)',
      npm: '![npm](https://img.shields.io/badge/npm-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)',
      Yarn: '![Yarn](https://img.shields.io/badge/yarn-%232187B6.svg?style=for-the-badge&logo=yarn&logoColor=white)',
      'React.js':
        '![React.js](https://img.shields.io/badge/react-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white)',
      'React Native':
        '![React Native](https://img.shields.io/badge/react_native-%2361DAFB.svg?style=for-the-badge&logo=react&logoColor=white)',
      Angular:
        '![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)',
      'Tailwind CSS':
        '![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%231a202c.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)',
      Bootstrap:
        '![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)',
      jQuery:
        '![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)',
      'jQuery UI':
        '![jQuery UI](https://img.shields.io/badge/jquery_ui-%23435B9A.svg?style=for-the-badge&logo=jquery&logoColor=white)',
      'three.js':
        '![three.js](https://img.shields.io/badge/three.js-%23400D17.svg?style=for-the-badge&logo=three.js&logoColor=white)',
      'd3.js':
        '![d3.js](https://img.shields.io/badge/d3.js-%23F9A03C.svg?style=for-the-badge&logo=d3.js&logoColor=white)',
      TensorFlow:
        '![TensorFlow](https://img.shields.io/badge/tensorflow-%23FF6F00.svg?style=for-the-badge&logo=tensorflow&logoColor=white)',
      MongoDB:
        '![MongoDB](https://img.shields.io/badge/mongodb-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)',
      Mongoose:
        '![Mongoose](https://img.shields.io/badge/mongoose-%23880000.svg?style=for-the-badge&logo=mongoose&logoColor=white)',
      Netlify:
        '![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=white)',
    };
    return badges[badge];
  };

  // Get badge markdown
  const selectedBadges = data.badges.map(generateBadge).join('\n');
  const badgeSection = selectedBadges ? selectedBadges + '\n' : '';
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
