// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return "";
  }
  else if (license !== 'None') {
    if (license == "MIT") {
      license = "MIT-yellow";
    } else if (license == "Apache 2.0") {
      license = "Apache_2.0-blue";
    } else if (license == "Zlib") {
      license = "Zlib-lightgrey";
    } else if (license == "Mozilla 2.0") {
      license = "MPL_2.0-brightgreen";
    } else if (license == "Eclipse 1.0") {
      license = "EPL_1.0-red";
    } else if (license == "GNU GPL 3.0") {
      license = "GPLv3-blue";
    };

    return `![${license} License](https://img.shields.io/badge/License-${license}.svg)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license == "None"){
    return 'Project Not Licensed';
  } else if (license !== "None"){
    if (license == "MIT") {
      license = "MIT";
    } else if (license == "Apache 2.0") {
      license = "Apache-2.0";
    } else if (license == "Zlib") {
      license = "Zlib";
    } else if (license == "Mozilla 2.0") {
      license = "MPL-2.0";
    } else if (license == "Eclipse 1.0") {
      license = "EPL-1.0"
    } else if (license == "GNU GPL 3.0") {
      license = "gpl-3.0";
    };

    return `[${license} License](https://opensource.org/licenses/${license})`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}   
  ${renderLicenseBadge(data.license)}
  
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
  This project is licensed under:  
  ${renderLicenseLink(data.license)}  

  ## Installation
  To install necessary dependencies, run the following command:  
  *${data.installation}*

  ## Testing
  To run tests, run the following command:  
  *${data.testing}*

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributing}

  ## Questions
  To view more of my work, visit my GitHub page: [GitHub: ${data.username}](https://github.com/${data.username})  
  If you have any questions, please feel free to contact me by email: ${data.email}
`;
}

module.exports = generateMarkdown;