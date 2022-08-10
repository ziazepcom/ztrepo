const fs = require('fs');       // this require function imports the Non-Global Core module fs in this fle.

    // DELETE A FILE USING fs MODULE'S unlink method.
fs.unlink('NP/ZZZDIR',(err)=>{
    if(err)
    {
        console.log('\n...Something went wrong, file not deleted...\n',err.message)     // message when an error occurred
    }
    else
    {
        console.log('\n...File has successfully deleted...\n')                          // message when file successfully deleted
    }
    })
    console.log('\n..This is the task listed after file delete task to show the asychronous processing while the file deleted...\n')

    //  CREATE A NEW DIRECTOR
fs.mkdir('./NP/ZZZDIR',(err)=>{
    if(err)
    {
        console.log('\n...Direcotry not created because something went wrong...',err.message,'\n')
    }
    else
    {
        console.log('\n...Success the directory has created...\n')
    }
})
    console.log('\n...Direcotry creation task has been initiated...\n')


//  CREATE A NEW TEXT FILE USING ASYCHRONOUS METHOD
let fd = 'This is a new text file which is being created by using node js writeFile function'   // this is the data for the file

fs.writeFile('NP/afwrite.txt',fd,(err)=>{

    if(err)
    {
        console.log('\n...There has been some error\n...',err.message)  // this is the error message if any occurs
    }
    else
    {
        console.log('\n....he new file has been successfully created with Asychronous method\n...',fd)  // this is the success message
    }
})

console.log('\n...New file creation with Asychronous method has been initiated\n...')   // this is the next task after the file creation

// APPEND IN A FILE ASYCHRONOUSLY
fs.appendFile('F:/NP/afwrite.txt','\nThe last line has also appended',(err)=>{
    if(err)
    {
        console.log('\n...Something has went wrong...\n')
    }
    else{
        console.log('\n...Contents have been appended at the end of the file...\n')
    }
})
    console.log('\n...The append into a file task has been initiated...\n')

// READ A FILE ASYCHRONOUSLY
fs.readFile('NP/aTextFilea.txt',(error,data)=>{
    if(error)
    {
        console.log("There has been went something wrong",error)
    }
    else
    {
        console.log('.....File reading Asynchronously has been started.....\n')
        console.log(data.toString(),'\n')
        console.log('.....End of file has reached.....\n')
    }
})
console.log('File reading Asynchronously has been initiated in the previous task\n')
//=========================================================================================

// READ A FILE SYCHRONOUSLYs.readFileSync('NP/aTextFile.txt',(error,data)=>{
const data = fs.readFileSync('NP/aTextFile.txt','utf-8',err)
{
    if(error)
    {
        console.log('the error is ',err)
    }
    else
    {
        console.log(data)
    }
}
{

    if(error)
    {
        console.log("There has been went something wrong",error)
    }
    else
    {
        console.log('.....File reading Synchronously has been started.....\n')
        console.log(data.toString(),'\n')
        console.log('.....End of file has reached.....\n')
    }
}
console.log('File reading Synchronously has been initiated in the previous task\n')