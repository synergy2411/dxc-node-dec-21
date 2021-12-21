// const stream = require("stream");
// const EventEmitter = require("events").EventEmitter;

// console.log(new stream.Stream() instanceof EventEmitter);

// console.log(new stream.Readable() instanceof stream.Stream);
// console.log(new stream.Writable() instanceof stream.Stream);
// console.log(new stream.Transform() instanceof stream.Stream);
// console.log(new stream.Duplex() instanceof stream.Stream);

const fs = require("fs");
const gzip = require("zlib").createGzip()

const rs = fs.createReadStream("./globals.js");
const ws = fs.createWriteStream("./global.js.gz");

rs.pipe(gzip).pipe(ws);