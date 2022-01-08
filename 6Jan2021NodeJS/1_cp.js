//child process is a node module used to create sub process within a script
// you can do different task with your script

const cp = require('child_process')
//console.log('Trying to open calculator')
//cp.execSync('calc')
//console.log('Trying to open VS Code')
//cp.execSync('code .')
//console.log('Trying to start chrome')
//cp.execSync('start chrome https://groww.in')

let output = cp.execSync('node test.js')
console.log('output : ' + output)