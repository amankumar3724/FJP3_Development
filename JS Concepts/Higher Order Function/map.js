let arr = [2,5,3,9,8]
let sqarr = arr.map(function square(v){
    return v*v
})
console.log(arr)
console.log(sqarr)

let nameArr = ['Aman','Ghanshyam','Satyam']
let nameMapArr = nameArr.map(function name(n){
    return n
})
console.log(nameArr)
console.log(nameMapArr)

const transaction = [1000,2000,2500,3000,5000]
const inrToUsd = 74
let transactionInRs = transaction.map(function (n){
    return (n * inrToUsd).toFixed(2)
})
console.log(transaction)
console.log(transactionInRs)