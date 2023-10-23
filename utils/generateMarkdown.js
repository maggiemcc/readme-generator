// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  }
  else if (license !== 'None') {
    return `![${license} License](https://img.shields.io/badge/License-${license}.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license == "None"){
    return 'Project is not licensed';
  } else if (license !== "None"){
    return `[${license} License](https://opensource.org/licenses/${license})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers, licenseBadge, licenseUrl) {
  return `# ${answers.title}   
  ${renderLicenseBadge(licenseBadge)}
  
  ## Table of Contents
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Testing](#testing)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Questions](#questions)

  ## Description
  ${answers.description}

  ## License
  ${renderLicenseBadge(licenseBadge)}  
  This project is licensed under: ${renderLicenseLink(licenseUrl)}  

  ## Installation
  To install necessary dependencies, run the following command:  
  ${answers.installation}

  ## Testing
  To run tests, run the following command:  
  ${answers.testing}

  ## Usage
  ${answers.usage}

  ## Contributors
  ${answers.contributing}

  ## Questions
  To view more of my work, visit my GitHub page: [GitHub: ${answers.username}](https://github.com/${answers.username})  
  If you have any questions, please feel free to contact me by email: ${answers.email}
`;
}

module.exports = generateMarkdown;