
const fs = require('fs')
const input = process.argv
//console.log(process.argv[4])
console.log(process.argv.length)

if(input[2]=='d' || input[2]=='D')
{
    fs.mkdir(input[3])
}
else if(input[2]=='f' || input[2]=='F')
{
    fs.writeFileSync(input[3],input[4])
}





