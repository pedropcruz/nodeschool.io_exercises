let fs = require('fs');

const fileContent = fs.readFileSync(process.argv[2], 'utf-8');

console.log(fileContent.match(/\n/g).length);