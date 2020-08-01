const http = require("http");
const os = require("os");

http.createServer(function (request, response) {
    response.end("Hello NodeJS!");
}).listen(3000, "127.0.0.1", function () {
    console.log("Сервер начал прослушивание запросов на порту 3000");
});

let userName = os.userInfo().username;
console.log(userName);