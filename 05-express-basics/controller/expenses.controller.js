const { expenses } = require("../model/expenses.model");
const { v4 } = require("uuid");

const getAllExpenses = (req, res) => {
    return res.send(expenses)
};
const getSingleExpense = (req, res) => {
    const { id } = req.params;
    const foundExp = expenses.find(
      (exp) => exp.id.toLowerCase() === id.toLowerCase()
    );
    if (foundExp) {
      return res.send(foundExp);
    }
    return res.send({ message: "Expense not found for ID - " + id });
};
const createExpense = (req, res) => {
    let expense = {
        ...req.body,
        id: v4(),
      };
      expenses.push(expense);
      res.send(expense);
};
const updateExpense = (req, res) => {
    const { id } = req.params;
    const position = expenses.findIndex((exp) => exp.id === id);
    if (position >= 0) {
      const { title, amount, createdAt } = req.body;
      if (title) {
        expenses[position].title = title;
      }
      if (amount) {
        expenses[position].amount = amount;
      }
      if (createdAt) {
        expenses[position].createdAt = createdAt;
      }
      return res.send(expenses[position]);
    }
    return res.send({ message: "Expense not found for IF - " + id });
};
const deleteExpense = (req, res) => {
    const { id } = req.params;
    const position = expenses.findIndex((exp) => exp.id === id);
    if (position >= 0) {
      const deletedExp = expenses.splice(position, 1);
      return res.send(deletedExp);
    }
    return res.send({ message: "Expense not found for ID - " + id });
};


module.exports = {
  getAllExpenses,
  getSingleExpense,
  createExpense,
  updateExpense,
  deleteExpense,
};
