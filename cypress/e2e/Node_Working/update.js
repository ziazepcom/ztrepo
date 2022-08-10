const dbConnect = require('./mongodb')

const updateData=async()=>{
    let data= await dbConnect()
    let result = await data.updateOne
    (
        {name:'10S'}, 
        {$set:{name:'Samsung Galaxy 10S'}}
    )

    console.warn(result)
}
updateData()