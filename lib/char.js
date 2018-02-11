const {
    convertDecToHex,
    convertHexToDec
} = require('./radix')


function codePointAt(str, index) {
    const codePointList = []

    for (const char of str) {
        codePointList.push(convertDecToHex(char.codePointAt(0)))
    }

    return !index
        ? codePointList
        : codePointList[index]
}

// example
// const str = '🍇𠮷a'
// console.log(codePointAt(str))
// console.log(codePointAt(str, 1))

module.exports = {
    codePointAt
}
