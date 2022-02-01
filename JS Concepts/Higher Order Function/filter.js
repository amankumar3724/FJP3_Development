let arr = [2,3,1,4,5,7,8,44,33,55]
// We need to take out all the even numbers
let evenNoArr = arr.filter(function(n){
    if(n%2==0){
        return true
    }
})
console.log(evenNoArr)

//We need to take out all the profit
const transactions = [1000,2000,3000,4000,-5500.-2200]
let profit = transactions.filter(function(n){
    if(n>0){
        return true
    }
})
console.log(profit)