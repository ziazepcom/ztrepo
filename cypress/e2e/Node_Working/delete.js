const { ObjectId } = require('mongodb')
const dbConnect = require('./MongoDBConfig')

const deleteData=async ()=>{
    console.log('Data deletion function started.....')
    let data = await dbConnect()
    let result = await data.deleteOne({name:'m40'})
    console.warn(result) 
    
    if(result.acknowledged)
    {
        if(result.deletedCount >0)
            {
                console.log('\nRecords has been deleted.....')
            }    
        else
            {
                console.log('\nSorry reocrd not found.....')
            } 
    }  
}

deleteData()
