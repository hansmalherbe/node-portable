var assert = require('assert')
	, portable = require('../main')

assert.equal(true, portable.existsSync('./tests/testfile.txt'))
assert.equal(false, portable.existsSync('./tests/x.txt'))

console.log('load ' + module.filename)
return

