const budgets = require("express").Router();
const budgetsArray = require("../models/budget");

budgets.get("/", (req,res) => {
    res.json(budgetsArray)
})

budgets.get("/:arrayIndex", (req,res) => {
    const {arrayIndex} =req.params
    res.json(budgetsArray[arrayIndex])
})

budgets.post("/", (req, res) => {
    const { body } = req;
    budgetsArray.push(body);
    const newIndx = budgetsArray.length - 1;
    res.json(budgetsArray[newIndx]);
  });

budgets.put("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params;
    const { body } = req;
    budgetsArray[arrayIndex] = body;
    res.json(budgetsArray[arrayIndex]);
  }); 

  budgets.delete("/:arrayIndex", (req, res) => {
    const { arrayIndex } = req.params; 
    const deletedBudget = budgetsArray.splice(arrayIndex, 1);
    res.json(deletedBudget[0]);
  });

  module.exports = budgets;