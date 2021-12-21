// console.log(__filename)
// console.log(__dirname)
// // console.log(process)

// let buf = new Buffer.from("Hello, This is going to be a buffer content")
// console.log(buf);

// console.log(buf.toString())

// setTimeout(() => {}, 2000)

const fs = require("fs")

const readStream =  fs.createReadStream("./app.js")
readStream.on("readable", () => {
    const chunk = readStream.read();
    if(chunk != null){
        console.log("GOT : ")
        console.log(chunk)
    }
})
// const writeStream = fs.createWriteStream("./app.md")

// readStream.pipe(writeStream);

// Request -> ReadableStream
// Response -> WritableStream
