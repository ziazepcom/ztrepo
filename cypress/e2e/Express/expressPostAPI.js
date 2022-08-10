const express = require('express')
const dbConnect = require('./MongoDBConfig')

const app = express()
app.use(express.json())

app.post('/',async (req,res)=>{
    let data = await dbConnect()
    let result = await data.insert(req.body)   
    res.send(result)
    //console.log(req.body)
})

app.listen(9999)