const fs = require('fs');
function generateREADME(response) {
    if (response.lisc === "mit") {
        badge = "https://badgen.net/github/license/micromatch/micromatch";
    } else if (response.lisc === "gpl") {
        badge = "https://badgen.net/snapcraft/license/okular";
    } else {
        badge = "https://badgen.net/gitlab/license/gitlab-org/omnibus-gitlab";
    };
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

${response.credits}
    
## License
    
![License Badge](${badge})
    
---`, err => err ? console.log("There was an error!") : console.log("README generated!"))
}

module.exports = generateREADME;