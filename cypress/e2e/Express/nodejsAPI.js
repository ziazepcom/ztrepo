const http = require('http')
const ad = require('./nodejsAPIdata')

http.createServer((req,res)=>{
    console.log('NodeJS http server is about to start.....')
    res.writeHead(200,{'Content-Type':'application/json'})
    const apidata = res.write(JSON.stringify(ad))
    res.end()
    console.log(apidata)

}).listen(5555)
console.log('NodeJS http server has started.....')