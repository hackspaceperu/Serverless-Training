const fs = require('fs')

const loadJson = (file) => {
    try {
        const dataBuffer = fs.readFileSync(file)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const saveJson = (data,file) => {
  const dataJSON = JSON.stringify(data)
  fs.writeFileSync(file, dataJSON)
}

module.exports = {
    loadJson,
    saveJson
}