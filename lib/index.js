const { codePointAt } = require('./char')
const { convertRadix } = require('./radix')

const str = '🍇𠮷a'
console.log(codePointAt(str))
console.log(codePointAt(str, 1))

console.log(convertRadix('a9', 16, 8))
