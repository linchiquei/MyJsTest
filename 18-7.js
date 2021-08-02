const more = (chars) => /.{8,}/.test(chars)

//let result = more("abc")
//let expect = false


test('應該要有八個字', () => {
    let result = more('123456789')
    expect(result).toBe(true)
})

function expect(result) {
    return {
        toBe: function(expected) {
            if (result !== expected) {
                throw new Error(`${result} 與預期的 ${expected} 不符`)
            }
        }
    }
}

function test(title, callback) {
    try {
        callback()
        console.log(`測試通過! ${title}`)
    } catch (err) {
        console.log(`測試失敗! ${title}`)
    }
}