// path modlue 

const path = require('path')

//path separator
console.log('path',path.sep)

const file = path.join('/content','sufolder','text.txt')
console.log(file)

/// only access the last file path

const base = path.basename(file)
console.log(base,'base')

// path absolute path
const resolvePath = path.resolve(__dirname,'content','subfolder','text.txt')
console.log('resolvedPath',resolvePath)
