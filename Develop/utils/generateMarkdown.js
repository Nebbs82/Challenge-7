// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseBadges = {
  MIT: '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)',
  Apache: '![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)',
  GPL: '![GPL License](https://img.shields.io/badge/License-GPL%20v3-blue.svg)',
  BSD: '![BSD License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)',
};
function renderLicenseBadge(license) {
  return licenseBadges[license] || '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
      return '';
  }
  return `\n[License](https://opensource.org/licenses/${license})`;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
      return '';
  }
  return `## License\nThis project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
${renderLicenseBadge(data.license)}

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

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please reach out to me at [${data.email}](mailto:${data.email}).
You can find my GitHub profile at [${data.github}](https://github.com/${data.github}).
`;
}

export default generateMarkdown;