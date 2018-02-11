const { expect } = require('chai')
const { codePointAt } = require('../lib/char')

describe('char', () => {
    describe('#codePointAt', () => {
        const str = '🍇𠮷a'
        it('it should works', () => {
            expect(codePointAt(str)).to.eql(['1f347', '20bb7', '61'])
            expect(codePointAt(str, 1)).to.equal('20bb7')
        })
    })
})
