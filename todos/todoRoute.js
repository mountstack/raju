const router = require('express').Router();

const todos = require('./todoController');

router.post('/', todos.createTodo)
router.get('/', todos.getAllTodo)
router.get('/:id', todos.getSingleTodo)
router.patch('/:id', todos.updateTodo)
router.delete('/:id', todos.deleteTodo)

module.exports = router; 