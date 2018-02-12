function convertDecToRadix(num, radix = 10) {
    return num.toString(radix)
}

function convertRadixToDec(str, radix = 10) {
    const parts = str.split('.')

    // 只适用于整数
    // parseInt(num, radix)
    return parts.length === 1
        ? parseInt(parts[0], radix)
        : parseInt(parts[0], radix) + parseInt(parts[1], radix) / Math.pow(radix, parts[1].length)
}

function convertDecToHex(num) {
    return convertDecToRadix(num, 16)
}

function convertHexToDec(num) {
    return convertRadixToDec(num, 16)
}

function convertRadix(num, origin, destination) {
    return convertDecToRadix(convertRadixToDec(num, origin), destination)
}

// example:
// var num = 345.678
// var hexNum = convertDecToHex(num)
// var finalNum = convertHexToDec(hexNum, 16)
// console.log(`${num} -> ${hexNum} -> ${finalNum}`)

module.exports = {
    convertDecToHex,
    convertHexToDec,
    convertRadix
}
