const transaction = [1200,300,2200,-11,-90,22]
const firstWithdrawn = transaction.find(function(n){
    return n<0
})
console.log(firstWithdrawn)