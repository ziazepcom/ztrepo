const path = require('node:path');          // this line declaires a path constant and consumes the node:path module

console.log(path.basename(__filename))      // __filename returns a full path of the file and basenem extracts the training filename
console.log(path.basename(__dirname))
console.log(__filename)
console.log(__dirname)
/*console.log(path.basename(__dirname))
console.log(__filename)
//console.log(path.path)
console.log(process.env.PATH)
console.log(path.parse(__filename))*/
