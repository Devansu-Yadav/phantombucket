const fs = require('fs')
const path = require('path')

const { generateBadge, getColor } = require('./badges')

const READEME_PATH = path.resolve(__dirname, "../", 'README.md')

const DATA_PATH = path.resolve(__dirname, 'data.json')

const INITIAL_WRITING = `
# phantombucket
A Curated list for beginer friendly repositories. The goal is to connect maintainers and contributers. 

### How to add your project to this list? 
Make a issue using our template, tell us about your project and if we find it awesome then we will add it this list. 

---

# Project List

`

const projectList = JSON.parse(fs.readFileSync(DATA_PATH).toString())

const generateProjectList = (plist) => {
    let projectlist = ``

    plist.forEach(el => {
        let { title, description, url, language } = el
        let proj = genProj({ title, description, url, language })

        projectlist = projectlist + '\n' + proj + '\n'
    })

    return projectlist
}

const genProj = ({ title, description, url, language }) => {
    let languageString = ''

    language.forEach(el => {
        let color = getColor(el)
        languageString = languageString + `${generateBadge(el, color)} `
    })

    let data = `
## ${title}

${description}

[Check here](${url})

**Languages**

${languageString}

---

`

    return data
}

const PROJECT_LIST = generateProjectList(projectList)

const CONTENT = INITIAL_WRITING + '\n' + PROJECT_LIST

fs.writeFileSync(READEME_PATH, CONTENT)