var fs = require('fs')
	, path = require('path')
	, semver = require('semver')

exports.existsSync = (function setupExistsSync() {
	if (semver.lt(process.version, '0.8.0')) {
		return function existsSync(filepath) {
			return path.existsSync(filepath)
		}
	}
	return function existsSync(filepath) {
		return fs.existsSync(filepath)
	}
}())

exports.exists = (function setupExistsfunction() {
	if (semver.lt(process.version, '0.8.0')) {
		return function exists(filepath, cb) {
			path.exists(filepath, cb)
		}	
	}
	return function exists(filepath, cb) {
		fs.exists(filepath, cb)
	}	
}())