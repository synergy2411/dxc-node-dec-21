// const path = require("path")

// const url = "http://www.example.com/public/index.html";

// console.log(path.basename(url));
// console.log(path.dirname(url));
// console.log(path.extname(url));

// const os = require("os")

// console.log("Architecture : ", os.arch())
// console.log("Total Memory : ", os.totalmem())
// console.log("Free Memory : ", os.freemem())
// console.log("Number of CPU's : ", os.cpus().length)

const fs = require("fs");
// fs.writeFileSync("./text.md", "This is sample string");
const bufferData = fs.readFileSync("./text.md");
console.log(bufferData.toString());
