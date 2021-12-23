const express = require("express");
const app = express()

const databaseFunc = () => {
        let db = {
            hasData : false
        }
        if(db.hasData){
            return [
                {title : "A Book", price : 12.99},
                {title : "A Bag", price : 10.99},
             ]
        }else{
            process.exit(1);
        }
    }

app.get("/todos", (req, res) => {
    res.send(databaseFunc())
})

app.listen(9091, () => console.log("Database Service started at PORT : 9091"))





// const databaseFunc = () => {
//     let db = {
//         hasData : false
//     }
//     if(db.hasData){
//         return [
//             {title : "A Book", price : 12.99},
//             {title : "A Bag", price : 10.99},
//          ]
//     }else{
//         process.exit(1);
//     }
// }

// module.exports = {
//     databaseFunc
// }