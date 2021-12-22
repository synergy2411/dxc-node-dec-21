const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
    layoutDir: __dirname + "/views/layouts",
    partialDir : __dirname + "/views/partials"
  })
);

const posts = [
  {
    title: "Awesome Post",
    author: "john Doe",
    comment : ["Good", "Great"]
  },
  {
    title: "Great work",
    author: "Jenny Doe",
    comment : []
  },
  {
    title: "How do you do?",
    author: "james doe",
    comment : ["Average", "Not Bad"]
  },
];

app.get("/", (req, res) => {
  res.render("main", {
    layout: "index",
    posts
  });
});

app.get("/about", (req, res) => {
    res.render("about", {
        layout : "index"
    })
})

app.listen(9099, () => console.log("Server started at PORT : 9099"));
