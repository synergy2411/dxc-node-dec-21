const express = require("express");

const { ExpenseRouter } = require("./router/expenses.routes")

const app = express();

app.use(express.json())         // parse the json body and attach with request stream
app.use(express.static(__dirname+'/public'))

app.use("/expenses", ExpenseRouter);

// http://localhost:9000
app.get("/", (req, res) => {
    res.sendFile(__dirname+'/public/index.html')
})


app.listen(9000, () => console.log("Server started at PORT : 9000"))