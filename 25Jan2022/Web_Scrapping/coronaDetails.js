const request = require('request')
const cheerio = require('cheerio')

console.log('Before')
request("https://www.worldometers.info/coronavirus/",cb)
function cb(error,response,html){
    if(error){
        console.log(error)
    }
    else{
        handleHtml(html)
    }
}
function handleHtml(html){
    let selTool = cheerio.load(html)
    let contentArr = selTool('.maincounter-number span')
    let totalCase = selTool(contentArr[0]).text()
    let totalDeath = selTool(contentArr[1]).text()
    let totalRecovery = selTool(contentArr[2]).text()
    console.log("Total Cases : " + totalCase)
    console.log("Total Deaths : " + totalDeath)
    console.log("Total Recoveries : " + totalRecovery)
}
console.log('After')