const http = require('http')
const os = require('os')
const myModule = require('./welcome')

console.log(global.name)

const word = process.argv[0];
const numberOfDeleteLetter = process.argv[0];


http.createServer(function (request, response) {
    response.end('Hello NodeJS!')
}).listen(3000, '127.0.0.1', function () {
    console.log('Сервер начал прослушивание запросов на порту 3000')
})

console.log(myModule.getMessage())
