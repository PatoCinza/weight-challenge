const { orderWeight } = require('../index.js')

describe('Should order stuff', function () {
    describe('should pass basic tests', () => {
        it('basic 1', () => {
            expect(orderWeight("103 123 4444 99 2000")).toEqual("2000 103 123 4444 99")
        })
        it('basic 2', () => {
            expect(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))
                .toEqual("11 11 2000 10003 22 123 1234000 44444444 9999")
        })
        it('empty', () => {
            expect(orderWeight(""))
                .toEqual("")
        })
        it('basic monstrosity with extra spaces', () => {
            expect(orderWeight('309754 387087 295747 100   111 120 40 54 91  269974 67 164 147 176 430372 404858 58052 175432 351832 271476 8'))
                .toEqual('100 111 120 40 8 54 91 164 147 67 176 430372 58052 175432 351832 271476 309754 404858 387087 295747 269974')
        })
    })
})