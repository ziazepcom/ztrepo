const http = require('http')

const port = 3000

const server = http.createServer(function(req, res) {
    res.write('<h1>Welcome to my Node.Js Sever</h1> running on port ' +port)
    res.end() 
})

server.listen(port,function(error){
    if(error){
        console.log('Something went wrong with your server...',error)
    }
    else{
        console.log('Server is running successfully on port.... ',port)
    }
})