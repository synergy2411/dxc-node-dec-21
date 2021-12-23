const express = require("express");
const axios = require("axios").default;
const app = express();
const PORT = process.env.PORT || 9090
const DB_SERVICE_PORT = process.env.DB_SERVICE_PORT;

app.get("/api/todos", (req, res) => {
    axios.get(`http://localhost:${DB_SERVICE_PORT}/todos`)
        .then(response => {
            res.send(response.data)
        })
        .catch(err => {
            return res.send(err)
        })
})

app.get("/books", (req, res) => {
    res.send({title : "A Book Title", author : "The Author Name"})
})

app.listen(PORT, () => console.log("Server running on PORT : 9090"))