const express = require("express");
const { expenses } = require("../model/expenses.model");
const {
  getAllExpenses,
  getSingleExpense,
  createExpense,
  updateExpense,
  deleteExpense,
} = require("../controller/expenses.controller");
const ExpenseRouter = express.Router();

ExpenseRouter.route("/")
    .get(getAllExpenses)
    .post(createExpense);

ExpenseRouter.route("/:id")
  .get(getSingleExpense)
  .patch(updateExpense)
  .delete(deleteExpense);

module.exports = {
  ExpenseRouter,
};
