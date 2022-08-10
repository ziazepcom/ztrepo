const http = require('http');       // this require function imports the Non-Global Core module http in this fle.
const url = require('url')          // this require function imports the Non-Global Core module url in this file.

// CREATING A HTTP SERVER METHOD 1
const port = process.env.PORT || 3000;  // here a constant port is created and ssigned a random port, if not then 3000 will be assigned

const ser = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is my Node.JS server</h1> <p> This is created by Zia.H </p>');
});

// here a function is used to start the http server listning for client request on the specified port
ser.listen(port, ()=>{
    console.log(`\n...Server is listening on port ${port}...\n`);
});

// CREATING A HTTP SERVER METHOD 2
http.createServer((request,response)=>{    
    response.writeHead(200,{"Content-Type":"text-html"})
    response.write("<h1>Node JS http server has started on port 8282</h1>")
    response.write("<button>Click Me</button>")
    response.end()
}).listen(8282);
console.log('\n...running sever on port =  8282...\n')



http
.createServer((requ, resp)=>{
    console.log(requ.url)
    const urlOB = url.parse(requ.url,true)
    console.log(urlOB)
    console.log(urlOB.query.keywords)
})
.listen(8383);

    console.log('\n...The 3rd server is also running on port 8383...\n')

console.log('\n...Congratulations all three(3) node js http servers are up and running...\n')