const transaction = [1200,300,2200,-11,90,22]
//in some, if all the element is satisfying the condition then it will return true
const anyTransaction = transaction.every(function(n){
    return n>0
})
console.log(anyTransaction)