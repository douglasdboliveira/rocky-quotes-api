const express = require('express');
const quotes = require('./quotes');
const app = express();

app.get("/quotes", (req, res) => {
    res.send(quotes);
});

app.get("/random", (req, res) => {
    res.send(quotes[Math.floor(Math.random() * 35)]);
});

app.get("/quotes/:value", (req, res) => {
    const value = req.params.value - 1;

    res.send(quotes[value]);
});

app.listen(3000, () => {
    console.log("Server started on port 3000!");
});