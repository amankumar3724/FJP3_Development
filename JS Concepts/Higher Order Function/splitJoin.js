//Split
let str = 'pepcoder'
let partsOfString = str.split('c')
//split function will split a string according to passed parameter
//and return the left and right part in an array
console.log(partsOfString)  //split array [pep,oder]

//Join
let joinedStr = partsOfString.join('c')
//join function will take an array and it will fill the parameter after each element
//of the array with the passed parameter
//and will return the complete string
console.log(joinedStr) // joined str

let nameArr = ['Aman Kumar','Jiten Pandey','Ritik Kumar']
//you have to use map function and take out first name and last name separately
let modifiedArr = nameArr.map(function(n){
    let partsOfName = n.split(' ')
    return partsOfName
})
console.log(modifiedArr)
