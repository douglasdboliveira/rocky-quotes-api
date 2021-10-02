const express = require('express');
const quotes = require('./modules/quotes');
const rocky = require('./modules/rocky');
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(rocky);
});

app.get("/quotes", (req, res) => {
    res.send(quotes);
});

app.get("/quotes/random", (req, res) => {
    res.send(quotes[Math.floor(Math.random() * 35)]);
});

app.get("/quotes/:value", (req, res) => {
    const value = req.params.value - 1;

    res.send(quotes[value]);
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}!`);
});