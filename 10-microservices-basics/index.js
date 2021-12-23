const express = require("express");
const axios = require("axios").default;
const app = express();

app.get("/api/todos", (req, res) => {
    axios.get("https://todos-heroku-dxc.herokuapp.com/todos")
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

app.listen(9090, () => console.log("Server running on PORT : 9090"))