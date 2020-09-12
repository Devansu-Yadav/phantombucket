const langColor = {
    javascript: "yellow",
    python: "blue",
    html: "red",
    java: "orange",
    css: "blueviolet",
    kotlin: "important",
    dart: "blue",
    react: 'blue'
}

const getColor = language => {
    return langColor[language]
}

module.exports = {
    getColor
}