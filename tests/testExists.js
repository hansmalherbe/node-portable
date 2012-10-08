var assert = require('assert')
	, portable = require('../main')

assert.equal(true, portable.existsSync('./tests/testfile.txt'))
assert.equal(false, portable.existsSync('./tests/x.txt'))

portable.exists('./tests/testfile.txt', function (exists) {
	assert.equal(true, exists)
})
portable.exists('./tests/x.txt', function (exists) {
	assert.equal(false, exists)
})

console.log('load ' + module.filename)
return

