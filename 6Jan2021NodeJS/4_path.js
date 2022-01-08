const path = require('path')

let ext = path.extname('D:\\FJP3_Dev\\6Jan2021NodeJS\\test1.txt')
//this extname method gets the extension name of the file
console.log('Extension Name -> ' + ext)
let baseName = path.basename('D:\\FJP3_Dev\\6Jan2021NodeJS\\test1.txt')
console.log('BaseName -> ' + baseName)
console.log(__dirname) //gets you the path of the current directory of the file
console.log(__filename) //gets you the path of the file you are in