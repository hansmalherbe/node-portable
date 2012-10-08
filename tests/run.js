var spawn = require('child_process').spawn
  , next = function setupNext() {
    var exitCode = 0
        , tests = ['testExists.js']
        , i = 0
    if (tests.length === 0) process.exit(exitCode)
    return function next() {
      var file = tests.shift()
      if (file) {
        console.log('')
        console.log('***   ' + (++i) + '. ' + file + '   ***')
        test()
      }
      return
      function test() {
        var proc = spawn('node', [ 'tests/' + file ])
        proc.stdout.pipe(process.stdout)
        proc.stderr.pipe(process.stderr)
        proc.on('exit', function exit(code) {
          exitCode += code || 0
          next()
        })
      } // test
    } // next
  }() // setupNext

next()
