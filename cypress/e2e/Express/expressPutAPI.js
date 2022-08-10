const express = require('express')
const dbConnect = require('./MongoDBConfig')

const app = express()
app.use(express.json())


// THIS METHOD IS USED TO UPDATE FILEDS EXCEPT NAME
/*app.put('/',async (req,res)=>{
    let data = await dbConnect()
    let result = await data.updateOne({name:req.body.name},{$set:req.body})
    res.send(result)
    //res.send('This is a PUT API')
})*/

// THIS METHOD IS USED TO UPDATE NAME ALSO WITH OTHER FIELDS
app.put('/:name',async (req,res)=>{
    let data = await dbConnect()
    let result = await data.updateOne({name:req.params.name},{$set:req.body})
    res.send(result)
})

app.listen(9999)