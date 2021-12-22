const { TodoModel } = require("../model/todo.model");

const getAllTodos = (req, res) => {
    TodoModel.find()
        .then(todos => {
            return res.send(todos);
        })
        .catch(err => {
            console.log(err);
            return res.send(err)
        })
}
const getSingleTodo = (req, res) => {}
const createTodo = (req, res) => {}
const updateTodo = (req, res) => {}
const deleteTodo = (req, res) => {}


module.exports = {
    getAllTodos,
    getSingleTodo,
    createTodo,
    updateTodo,
    deleteTodo
}