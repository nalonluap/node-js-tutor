const path = require('path')
const notes = '/content/subfolder/test.txt'

console.log(path.dirname(notes)) // /users/flavio
console.log(path.basename(notes)) // notes.txt
console.log(path.extname(notes)) // .txt
