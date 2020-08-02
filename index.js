const http = require("http");
const os = require("os");
const myModule = require('./welcome')


http.createServer(function (request, response) {
    response.end("Hello NodeJS!");
}).listen(3000, "127.0.0.1", function () {
    console.log("Сервер начал прослушивание запросов на порту 3000");
});

for (let prop in os.userInfo()) {
    console.log(os.userInfo()[prop]);
}

console.log(os.totalmem())

console.log(myModule.getMessage())