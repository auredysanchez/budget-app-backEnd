const transactions = require("express").Router();
const transactionsArray = require("../models/transaction");
// const express = require("express")


//index
transactions.get("/", (req,res) => {
    res.json(transactionsArray)
})

// transactions.get("/:arrayIndex", (req,res) => {
//     const {arrayIndex} =req.params
//     res.json(transactionsArray[arrayIndex])
// })

//show
transactions.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  const transaction = transactionsArray[arrayIndex];
  // bookmark and all its details...
  if (transaction) {
    res.json(transaction);
  } else {
    res.redirect("/404");
  }
});

//create
transactions.post("/", (req, res) => {
    const { body } = req;
    transactionsArray.push(body);
    const newIndx = transactionsArray.length - 1;
    res.json(transactionsArray[newIndx]);
  });

  //update
transactions.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    const { body } = req;
    transactionsArray[arrayIndex] = body;
    res.json(transactionsArray[arrayIndex]);
  }); 


//delete
  transactions.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params; 
    const deletedTransaction = transactionsArray.splice(arrayIndex, 1);
    res.json(deletedTransaction[0]);
  });

  module.exports = transactions;