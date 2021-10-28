const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

//Get requests:
app.get("/", (req, res) => res.send("nodejs week3 warmup homework: try /calculator for calculator exercise!"));

app.get("/calculator", (req, res) => res.send("try: /add || /subtract || /multiply || /divide and parameters"));

app.get("/calculator/add", (req, res) => {
    const query = req.query;
    const values = Object.values(query);
    console.log(values);
    let addResult = values.reduce((total, value) => parseInt(total) + parseInt(value));
    console.log(addResult);
    res.send(`Result of addition = ${addResult}`);
});

app.get("/calculator/subtract", (req, res) => {
    const { firstParam, secondParam } = req.query;
    const subResult = parseInt(firstParam) - parseInt(secondParam);
    console.log(subResult);
    res.send(`Result of subtraction = ${subResult}`);
});

app.get("/calculator/multiply", (req, res) => {
    const { params } = req.query;
    const values = Object.values(params);
    console.log(values);
    let multiplyResult = values.reduce((total, value) => parseInt(total) * parseInt(value));
    console.log(multiplyResult);
    res.send(`Result of multiplication = ${multiplyResult}`);
});

app.get("/calculator/divide", (req, res) => {
    const { firstParam, secondParam } = req.query;
    console.log(firstParam);
    console.log(secondParam);
    const divideResult = (parseInt(firstParam) / parseInt(secondParam)).toFixed(2);
    console.log(divideResult);
    res.send(`Result of division = ${divideResult}`);
});

//Post requests:
app.post("/calculator/multiply", (req, res) => {
    const query = req.body;
    console.log(query);
    const values = Object.values(query);
    console.log(values);
    let multiplyResult = values.reduce((total, value) => parseInt(total) * parseInt(value));
    console.log(multiplyResult);
    res.send(`Result of multiplication = ${multiplyResult}`);
});

app.post("/calculator/divide", (req, res) => {
    const query = req.body;
    console.log(query);
    const values = Object.values(query);
    console.log(values);
    let divideResult = values.reduce((total, value) => parseInt(total) / parseInt(value));
    console.log(divideResult);
    res.send(`Result of division = ${divideResult}`);
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));