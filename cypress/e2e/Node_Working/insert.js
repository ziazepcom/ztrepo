const dbConnect = require('./mongodb')

const insert = async()=>{
    console.log('Insert function has started.....')
    const db = await dbConnect()
    //const result = db.insert({name:'Latitude 7472',brand:'Dell',price:21000,category:'Laptop'})
    const rslt = await db.insertOne({name:'10S',brand:'Samsung',price:16000,category:'Phone'})
    //console.log(db)
    if(rslt.acknowledged)
    {
        console.log(' Data has inserted.....')}
        //db.close()
}
insert()
