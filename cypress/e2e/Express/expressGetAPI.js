const express = require('express')
const dbConnect = require('./MongoDBConfig')
const dbc = require('./MongoDBConfig')

const app = express()

app.get('/', async (req,res)=>{
    let data = await dbConnect()
    data = await data.find().toArray()
    res.send(data)
})

app.listen(8888)