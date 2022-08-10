// THIS MODULE IS USED TO CONNECT WITH A MONGO DATABASE

const {MongoClient} = require("mongodb")        // This is a Non-Global Node.JS module to connect to MongoDB.
const url = "mongodb://127.0.0.1:27017"         // This is used to pass the connection/url of the db
const database = 'e-comm'                       // This is the name of the database
const client = new MongoClient(url)             // This is the client which is this script which will be passing url to the database

async function dbConnect()               // This is the function which used to connect to the database.
{
    console.log('Database connection has initiated.....')
    let result = await client.connect()
    db = result.db(database)
    return db.collection('products')
    console.log('Database connection has closed.....')    
}

module.exports = dbConnect;