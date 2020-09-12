const SHIELDS_URL = "https://img.shields.io/badge/"

const generateBadge = (language, color) => {

    let badge = `![${language}](${SHIELDS_URL}${language}-${color})`

    return badge
}

module.exports = {
    generateBadge
}