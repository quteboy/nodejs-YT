const {readFileSync,writeFileSync} = require('fs') /// destructure
console.log('start')
const file = readFileSync('./content/first.txt','utf8') // basic code to read file content
const second = readFileSync('./content/second.txt','utf8') // basic code to read file
console.log(file,second)

//code write a file or create a file

const resp = writeFileSync('./content/result.txt',`Here is file ${file} ${second}`) // if file exist it will override content in file if not it will create new one
writeFileSync('./content/result.txt',`Here is file list ${file} ${second}`,{flag:'a'})
console.log('end the task')
console.log('starting the next task')