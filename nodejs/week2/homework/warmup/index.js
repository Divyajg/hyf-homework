/* const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));

app.get("/add", (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseInt(num1, 10) + parseInt(num2, 10);
    res.send({ Result: result });
});

app.get("/multiply", (req, res) => {
    const { num1, num2 } = req.query;
    const result = parseInt(num1, 10) * parseInt(num2, 10);
    res.send({ Result: result });
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`)); */

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));
app.get("/numbers/add", (req, res) => {
    const firstNum = parseInt(req.query.firstNum);
    const secondNum = parseInt(req.query.secondNum);
    res.send(`Sum of ${firstNum+secondNum}`);
});
app.get("/numbers/multiply", (req, res) => {
    const firstNum = parseInt(req.query.firstNum);
    const secondNum = parseInt(req.query.secondNum);
    res.send(`multiply of ${firstNum * secondNum}`);
});
//console.log(9*2);
app.listen(3000, () => console.log(`Calculator on port 3000`));
module.exports = app;