// file system module

// ***files***
const fs = require('fs')
const path = require('path')
 //1 We will be reading, writing, deleting and updating files
 //let content = fs.readFileSync('test1.txt')
 //console.log("This is test1 data -> " + content)
 //writing to a file
 //writeFileSync
 //if the file name that is passed but does not exist then a new file will be created
 //and name and data will be written on that file
 //fs.writeFileSync('test3.txt','This data will be written on test3')
 //fs.writeFileSync('test2.txt','This data will be written on test2')
 //console.log('data written')

 //append a file
 //appendFileSync method adds a new data to a previously written file
 //fs.appendFileSync('test2.txt',' This is new append data')

 //delete a file
 //unlink sync
 //fs.unlinkSync('test3.txt')
 //console.log('test3.txt deleted')

 //******Directories******//
 //mkdirSync method is used to create a new directory or folder
 //fs.mkdirSync('myDirectory')
 //console.log('Directory created')
 
//delete a directory
//rmdirSync
//fs.rmdirSync('myDirectory')
//console.log('Directory deleted')

//to check whether a directory exist or not
//existsSync
//this returns true or false based on whether the passed directory exists or not
//let doesExist = fs.existsSync('myDirectory')
//console.log(doesExist)

//let statsOfDirectory = fs.lstatSync('myDirectory')
//console.log(statsOfDirectory)

//console.log('isFile?',statsOfDirectory.isFile())
//console.log('isDirectory?',statsOfDirectory.isDirectory())

//readdirSync
//readdirSync is a method which is used to check content inside a directory
// let folderPath = 'D:\\FJP3_Dev\\6Jan2021NodeJS\\myDirectory'
// let folderContent = fs.readdirSync(folderPath)
// console.log("Directory Content : " + folderContent)

// copying files
// src file, destination file path
 let srcFilePath = 'D:\\FJP3_Dev\\6Jan2021NodeJS\\myDirectory\\t2.txt'
 let destinationPath = 'D:\\FJP3_Dev\\6Jan2021NodeJS\\myDirectory1\\'

 let tobeCopiedFileName = path.basename(srcFilePath)
 console.log(tobeCopiedFileName)

 let destPath = path.join(destinationPath,tobeCopiedFileName)
 console.log(destPath)

 fs.copyFileSync(srcFilePath,destPath)
 console.log('File Copied')