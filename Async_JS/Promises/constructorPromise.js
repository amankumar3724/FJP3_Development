// let myPromise = new Promise(function(resolve, reject){
    //Your code will go here
//})

let promise = new Promise (function(resolve, reject){
    const a = 4;
    const b = 4;
    if(a == b){
        resolve("Yes they are equal");
    } else {
        reject("No the values are not equal");
    }
});

promise
    .then(function (data){
        console.log("resolve coming from the Resolve method->" + data);
    })
    .catch(function (err){
        console.log("result coming from Reject method->" + err);
    })