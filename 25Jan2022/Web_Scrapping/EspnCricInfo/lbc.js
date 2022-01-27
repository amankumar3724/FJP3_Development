const request = require('request')
const cheerio = require('cheerio')

console.log('Before')
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"
request(url,cb)
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
    let contentArr = selTool('.d-flex.match-comment-padder.align-items-center .match-comment-long-text')
    let lastComment = selTool(contentArr[0]).text()
    console.log("Last comment : " + lastComment)
}
console.log('After')