//Callback function - any function that is passed as an argument 
//to another function is known as callback function
let fs = require('fs')
/*
function printFirstName(firstName, cb, cb2){
    console.log(firstName)
    cb('Kumar')
    cb2(23)
}

function printLastName(lastName){
    console.log(lastName)
}

function printAge(age){
    console.log(age)
}

printFirstName('Aman', printLastName, printAge) */

//Synchronus way of reading file
/*console.log('Before')
let data = fs.readFileSync('f1.txt')
console.log(' ' + data)
console.log('After')*/

//Asynchronus way 
console.log('Before')
fs.readFile("f1.txt",cb) //async method
fs.readFile("f2.txt",cb2)
function cb(err, data){ //errorfirst callback
    if(err) {
        console.log(err)
    }
    else {
        console.log(" " + data)
    }
}
function cb2(err, data){ //errorfirst callback
    if(err) {
        console.log(err)
    }
    else {
        console.log(" " + data)
    }
}
console.log('After')
// in Async JS ->> Call stack -> Node APIs list -> Call back queue -> Event Loop -> Call stack
