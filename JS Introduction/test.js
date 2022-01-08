/*console.log('Hello Pepcoders, how are you?')
var a
console.log(a)
var a=2
console.log(a)
var a="hey"
console.log(a);
a=true
console.log(a)
a=null
console.log(a)

num=23
var flag = true
for(i=2;i*i<=num;i++)
{
    if(num%i==0)
    {
        flag=false
        break
    }
}
if(flag)
{
    console.log("Prime Number")
}
else
{
    console.log("Not a prime number")
}
*/
/*
if(10%2==0)
{
    var a=2
    console.log("It is inside if condition ",a)
}
console.log("It is outside if condition ",a)

if(10%2==0)
{
    let b=2
    console.log("It is inside if condition ",b)
}
console.log("It is outside if condition ",b)
*/
/*
const c = 10
console.log(c)
c=11
console.log(c)

function substraction(a,b)
{
    console.log("Substraction is ", b - a)
}
substraction(10,91)
let c
function multiply(a,b)
{
    c=a*b
    return c
}
let ans = multiply(2,3)
console.log("Multiply is ", ans)

// function as a first class citizen
let sayHi = function(){
    console.log("hi")
}
sayHi()

//IIFE : Immediately Invoked Function Expression
let add = (function(a,b){
    return a+b
})(20,30)
console.log(add)
*/

//Array provides an ordered collection of elements
let arr = []
let car = ["BMW","Tesla","Mercedes",true,12,23] //array initialized
console.log("This is cars array ",car)
let car2 = ['BMW','Tesla','Audi','Mercedes','Porsche']
console.log(car2[1])
console.log(car2[3])

//Replace an element of an array
car2[3] = 'Bentley' //3rd index of array will get replaced with this value
console.log(car2)

//Add a new element to an array
car2[5] = 'Jaguar'
console.log(car2)
//car2[7] = 'Honda'
//console.log(car2)

// Array methods
// pop method () -- this method removes the last element of the array
console.log(car2.pop())
console.log(car2)

// push method () -- this method adds an element in the last of the array
car2.push('Rolls Royce')
console.log(car2)

// shift method --  this method removes an element from the start of the array
 console.log(car2.shift())
 console.log(car2)

 // unshift method -- this method adds an element from the start of the array
 car2.unshift('Aston Martin')
 console.log(car2)

 // length of an array
console.log(car2.length)

// multidimensional array
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix[0,0])
console.log(matrix[1][2])