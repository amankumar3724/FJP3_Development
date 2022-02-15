const fs = require("fs");
console.log("Before");
let promise = fs.promises.readFile("f1.txt");
//console.log(promise) -> will give Pending status
promise.then(function(data){
    console.log("File Data => " + data)   
})
promise.catch(function(err){
    console.log(err);
})
console.log("After");