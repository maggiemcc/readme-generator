// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
  ${data.license}

  ## Installation
  ${data.installation}

  ## Testing
  ${data.testing}

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
