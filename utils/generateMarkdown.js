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
  List specific steps to help remove ambiguity and get people to use your project as quickly as possible. Let people know if it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually.  
  To install necessary dependencies, run the following command:  
  ${answers.installation}

  ## Testing
  Mention and explain all the tests that can be performed with the code examples you’ve provided.  
  To run tests, run the following command:  
  ${answers.testing}

  ## Usage
  Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.  
  ${answers.usage}

  ## Contributors
  Show your appreciation to those who have contributed to the project.  
  Also state if you are open to contributions and what your requirements are for accepting them. For people who want to make changes to your project, it's helpful to have some documentation on how to get started.  
  ${answers.contributing}

  ## Questions
  To view more of my work, visit my GitHub page: [GitHub: ${answers.username}](https://github.com/${answers.username})  
  If you have any questions, please feel free to contact me by email: ${answers.email}
`;
}

module.exports = generateMarkdown;