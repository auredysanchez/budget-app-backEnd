const express = require("express");
const transactionsController = require("./controllers/transactions");
const cors = require('cors');
const app = express();
app.use(express.json()); 
app.use(cors());



app.use("/transactions", transactionsController);

app.get("/", (req,res) => {
    res.send("Welcome to my Budgeting App!!")
})

// app.get("/", (req, res) => {
//   req.body;
//   res.send("Budget App");
// });

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found!!!");
});

module.exports = app;