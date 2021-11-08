const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

//Get requests:
app.get("/", (req, res) => res.send("nodejs week3 warmup homework: try /calculator for calculator exercise!"));

app.get("/calculator", (req, res) => res.send("try: /add || /subtract || /multiply || /divide and parameters"));

addParams = (values) => values.reduce((total, value) => parseInt(total) + parseInt(value));

subParams = (values) => values.reduce((total, value) => parseInt(total) - parseInt(value));

multiplyParams = (values) => values.reduce((total, value) => parseInt(total) * parseInt(value));

divideParams = (values) => values.reduce((total, value) => parseInt(total) / parseInt(value));

app.get("/calculator/add", (req, res) => {
    const query = req.query;
    const values = Object.values(query);
    res.send(`Result of addition = ${addParams(values)}`);
});

app.get("/calculator/subtract", (req, res) => {
    const query = req.query;
    const values = Object.values(query);
    res.send(`Result of subtraction = ${subParams(values)}`);
});

app.get("/calculator/multiply", (req, res) => {
    const query = req.query;
    const values = Object.values(query);
    res.send(`Result of multiplication = ${multiplyParams(values)}`);
});

app.get("/calculator/divide", (req, res) => {
    const query = req.query;
    const values = Object.values(query);
    res.send(`Result of division = ${divideParams(values)}`);
});

//Post requests:
app.post("/calculator/add", (req, res) => {
    const query = req.body;
    const values = Object.values(query);
    res.send(`Result of addition = ${addParams(values)}`);
});

app.post("/calculator/subtract", (req, res) => {
    const query = req.body;
    const values = Object.values(query);
    res.send(`Result of subtraction = ${subParams(values)}`);
});

app.post("/calculator/multiply", (req, res) => {
    const query = req.body;
    const values = Object.values(query);
    res.send(`Result of multiplication = ${multiplyParams(values)}`);
});

app.post("/calculator/divide", (req, res) => {
    const query = req.body;
    const values = Object.values(query);
    res.send(`Result of division = ${divideParams(values)}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));