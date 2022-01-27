const request = require(request)
const cheerio = require(cheerio)

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
function handleHtml(){

}

console.log('After')