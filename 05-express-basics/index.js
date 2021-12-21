const express = require("express");
const { v4 } = require("uuid")
const app = express();

app.use(express.json())

const expenses = [
    {id : "e101", title : "shopping", amount : 12.99, createdAt : new Date("Dec 20 2021")},
    {id : "e102", title : "grocery", amount : 19.9, createdAt : new Date("Jan 2 2019")},
    {id : "e103", title : "insurance", amount : 29.9, createdAt : new Date("Aug 21 2021")},
    {id : "e104", title : "planting", amount : 2.19, createdAt : new Date("Jun 7 2020")},
]

// POST - http://localhost:9000/expenses
app.post("/expenses", (req, res) => {
    let expense = {
        ...req.body,
        id : v4()
    }
    expenses.push(expense)
    res.send(expense)
})


// GET - http://localhost:9000/expenses
app.get("/expenses", (req, res) => {
    res.send(expenses);
})

// http://localhost:9000
app.listen(9000, () => console.log("Server started at PORT : 9000"))