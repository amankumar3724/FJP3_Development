const transaction = [-1200,-300,-2200,-11,-90,-22]
//in some, if any one element is satisfying the condition then it will return true
const anyTransaction = transaction.some(function(n){
    return n>0
})
console.log(anyTransaction)