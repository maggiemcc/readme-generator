// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None"){
    return ''
  }
  else if(license == 'MIT'){
    return `![GitHub License](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } 
  else if (license == "Apache 2.0"){
    return `![GitHub License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  }
  else if (license == "Creative Commons (CC0)"){
    return `![GitHub License](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)`
  } 
  else if (license == "Eclipse 1.0"){
    return `![GitHub License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
  }
  else if (license == "GNU GPL 3.0"){
    return `![GitHub License](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  }
  else if (license == "Mozilla 2.0"){
    return `![GitHub License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
  } 
  else if (license == "Zlib"){
    return `![GitHub License](https://img.shields.io/badge/License-Zlib-lightgrey.svg)`
  } 
  else return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None"){
    return ''
  }
  else if(license == 'MIT'){
    return `[${license} License](https://opensource.org/licenses/MIT)`
  } 
  else if (license == "Apache 2.0"){
    return `[${license} License](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license == "Creative Commons (CC0)"){
    return `[${license} License](http://creativecommons.org/publicdomain/zero/1.0/)`
  } 
  else if (license == "Eclipse 1.0"){
    return `[${license} License](https://opensource.org/licenses/EPL-1.0)`
  }
  else if (license == "GNU GPL 3.0"){
    return `[${license} License](https://www.gnu.org/licenses/gpl-3.0)`
  }
  else if (license == "Mozilla 2.0"){
    return `[${license} License](https://opensource.org/licenses/MPL-2.0)`
  } 
  else if (license == "Zlib"){
    return `[${license} License](https://opensource.org/licenses/Zlib)`
  } 
  else return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - [Description](#description)
  - [License](#license)
  - [Installation](#installation)
  - [Testing](#testing)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## License
  ${renderLicenseBadge(data.license)}  
  This project is licensed under: ${data.license}
  ${renderLicenseLink(data.license)}

  ## Installation
  To install necessary dependencies, run the following command:
  > ${data.installation}

  ## Testing
  To run tests, run the following command:
  > ${data.testing}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributing}

  ## Questions
  - To view more of my work, visit my GitHub page: [${data.username} GitHub](https://github.com/${data.username})
  - If you have any questions, please feel free to contact me by email: ${data.email}
`;
}

module.exports = generateMarkdown;
