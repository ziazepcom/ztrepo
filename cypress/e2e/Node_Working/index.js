// THIS MODULE IS USED TO CONNECT WITH A MONGO DATABASE
const dbConnect = require('./mongodb')

dbConnect().then((res)=>{
  res.find().toArray().then((data)=>{
    console.log(data)
  })
})
console.warn(dbConnect())
