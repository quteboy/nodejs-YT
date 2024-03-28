//Modules -- encapsulated code (only share minimum)\
//CommonJs, every file is module (by default)
const names = require('./4-names')
const sayHi = require('./5-utils')
console.log('names',names)
const generic = require('./6-alternative')
const func = require('./7-mind-grenade') /// usual
// require('./7-mind-grenade')
console.log('generic',generic)
sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
// when you import a module you eventually invoke it