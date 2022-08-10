const fs = require('fs')
const http = require('http')
const url = require('url')
const nem = require('nodemailer')

n
http
.createServer((req,res)=>{
    const path = req.url;
    if( path == '/about')
    {
        console.log('About Page')
    }
    else if( path == '/seach')
    {
        console.log('seach page')
    }
    else if( path == '/')
    {
        console.log('home page')
        res.writeHead(
            200,
            {'content-type':'text/html'}
            )
        const rf = fs.readFileSync('Node_JS_Working/home.htm')
        res.write(rf)
        res.end();
        console.log('file has rad successfully')
    }
    else if( path == '/services')
    {
        console.log('services page')
    }
})
.listen(8888);
    
    console.log('\n...http server is running on port 8888...\n')