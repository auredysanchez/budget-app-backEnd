const transactions = require("express").Router();
const transactionsArray = require("../models/transaction");
// const express = require("express")



transactions.get("/", (req,res) => {
    res.json(transactionsArray)
})

transactions.get("/:arrayIndex", (req,res) => {
    const {arrayIndex} =req.params
    res.json(transactionsArray[arrayIndex])
})

// transactions.get("/:arrayIndex", (req, res) => {
//   const { arrayIndex } = req.params;
//   const transaction = transactionsArray[arrayIndex];
//   // bookmark and all its details...
//   if (transaction) {
//     res.json(transaction);
//   } else {
//     res.redirect("/404");
//   }
// });

transactions.post("/", (req, res) => {
    const { body } = req;
    transactionsArray.push(body);
    const newIndx = transactionsArray.length - 1;
    res.json(transactionsArray[newIndx]);
  });

transactions.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    const { body } = req;
    transactionsArray[arrayIndex] = body;
    res.json(transactionsArray[arrayIndex]);
  }); 

  transactions.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params; 
    const deletedtransaction = transactionsArray.splice(arrayIndex, 1);
    res.json(deletedtransaction[0]);
  });

  module.exports = transactions;