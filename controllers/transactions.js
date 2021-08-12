const transactions = require("express").Router();
const transactionsArray = require("../models/transaction");
const express = require("express");

//index
transactions.get("/", (req, res) => {
  res.status(200).json(transactionsArray);
});

// transactions.get("/:arrayIndex", (req,res) => {
//     const {arrayIndex} =req.params
//     res.json(transactionsArray[arrayIndex])
// })

//show
transactions.get("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  const transaction = transactionsArray[arrayIndex];
  if (transaction) {
    res.status(200).json(transaction);
  } else {
    res.redirect("/404");
  }
});

//create
transactions.post("/", (req, res) => {
  const { body } = req;
  transactionsArray.push(body);
  const newIndex = transactionsArray.length - 1;
  res.json(transactionsArray[newIndex]);
});

//update
// transactions.put("/:arrayIndex", (req, res) => {
//   const { arrayIndex } = req.params;
//   const { body } = req;
//   transactionsArray[arrayIndex] = body;
//   res.json(transactionsArray[arrayIndex]);
// });

//delete
transactions.delete("/:arrayIndex", (req, res) => {
  const { arrayIndex } = req.params;
  const deleteTransaction = transactionsArray.splice(arrayIndex, 1);
  res.status(200).json(deleteTransaction[0]);
});

module.exports = transactions;
