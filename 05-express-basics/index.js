const express = require("express");
const { v4 } = require("uuid")
const app = express();

app.use(express.json())         // parse the json body and attach with request stream
app.use(express.static(__dirname+'/public'))

const expenses = [
    {id : "e101", title : "shopping", amount : 12.99, createdAt : new Date("Dec 20 2021")},
    {id : "e102", title : "grocery", amount : 19.9, createdAt : new Date("Jan 2 2019")},
    {id : "e103", title : "insurance", amount : 29.9, createdAt : new Date("Aug 21 2021")},
    {id : "e104", title : "planting", amount : 2.19, createdAt : new Date("Jun 7 2020")},
]

// DELETE - http://localhost:9000/expenses/xyz
app.delete("/expenses/:id", (req, res)=>{
    const { id } = req.params;
    const position = expenses.findIndex(exp => exp.id === id)
    if(position >= 0){
        const deletedExp = expenses.splice(position, 1)
        return res.send(deletedExp)
    }
    return res.send({message : "Expense not found for ID - " + id})
})

// GET - http://localhost:9000/expenses/e101
app.get("/expenses/:id", (req, res) => {
    const {id} = req.params;
    const foundExp = expenses.find(exp => exp.id.toLowerCase() === id.toLowerCase())
    if(foundExp){
        return res.send(foundExp)
    }
    return res.send({message : "Expense not found for ID - " + id})
})


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


app.get("/", (req, res) => {
    res.sendFile(__dirname+'/public/index.html')
})

// http://localhost:9000
app.listen(9000, () => console.log("Server started at PORT : 9000"))