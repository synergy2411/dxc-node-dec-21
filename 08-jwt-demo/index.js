const express = require("express");
const { sign, verify } = require("jsonwebtoken");
const app = express();
const MY_SECRET_KEY = "THIS_SHOULD_WORK";

app.use(express.json());

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  // Verify the user from Databse here
  if (username && password) {
    const token = sign({ username, password }, MY_SECRET_KEY);
    return res.send({ token });
  } else {
    return res.send({ message: "Bad Credentials" });
  }
});

const ensureToken = (req, res, next) => {
  const authHeaders = req.headers.authorization;
  if (authHeaders !== undefined) {
    const token = authHeaders.split(" ")[1];
    req.token = token;
    next();
  }
};

app.get("/api/protected", ensureToken, (req, res, next) => {
  verify(req.token, MY_SECRET_KEY, (err, decode) => {
    if (err) {
      return res.send(err);
    }
    console.log("DECODE : ", decode); // {iat : "", username :"...", password :"..."}
    return res.send({ message: "Seems you are authenticated..." });
  });
});

app.listen(9091, () => console.log("Server started at PORT : 9091"));
