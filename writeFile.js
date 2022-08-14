const fs = require('fs');

// FUNCTION TO USE THE RESPONSE FROM THE INQUIRER FUNCTION AND GENERATE A README 
function generateREADME(response) {
    // BASED ON CHOICE PICK THE LICENSEING BADGE 
    if (response.lisc === "mit") {
        badge = "https://badgen.net/github/license/micromatch/micromatch";
    } else if (response.lisc === "gpl") {
        badge = "https://badgen.net/snapcraft/license/okular";
    } else {
        badge = "https://badgen.net/gitlab/license/gitlab-org/omnibus-gitlab";
    };
    // USE THE WRITEFILE FUNCTION TO MAKE A README 
    fs.writeFile(`${response.fullName}'s README`, `# ${response.title}

## Description
    
${response.desc}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
    
${response.install}
    
## Usage
    
${response.usage}
    
## Credits
    
GitHub: (https://github.com/${response.userName})
Email Me: (mailto:${response.email})

${response.credits}
    
## License
    
![License Badge](${badge})
    
---`, err => err ? console.log("There was an error!") : console.log("README generated!"))
}

// EXPORT THE FUNCTION TO BE USED IN index.js 
module.exports = generateREADME;