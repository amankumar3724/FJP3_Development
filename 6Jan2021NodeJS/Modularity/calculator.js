function add(a,b){
    console.log('The sum is',a+b)
}
function sub(a,b){
    console.log('The difference is',a-b)
}
function mul(a,b){
    console.log('The product is',a*b)
}
function div(a,b){
    console.log('The quotient is',a/b);
}
function rem(a,b){
    console.log('The remainder is',a%b)
}
module.exports={
    addition : add,
    subtract: sub,
    multiplication : mul,
    division : div,
    remainder : rem,
}

// module.exports is a Object provided by Node.js by
// which you can export your functions in key value pair
// you will use your functions with the keys you have assigned
// to them