const express = require('express');
const quotes = require('./quotes');
const app = express();

const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}!`);
});