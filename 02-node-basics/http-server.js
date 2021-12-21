const http = require("http");

const requestListener = (request, response) => {
    console.log("URL : ", request.url)
    console.log("Method : ", request.method)
    console.log("Headers : ", request.headers)
    response.write(JSON.stringify({message : "SUCCESS"}))
    response.end()
}

const server = http.createServer(requestListener)

server.listen(3000, "localhost", () => console.log("Server started at PORT : 3000"))