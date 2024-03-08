

let todos = []; 

function createTodo(req, res) { 
    todos.push(req.body);

    res.json({
        status: 'success', 
        message: 'Created Successfully!' 
    }); 
}

function getAllTodo(req, res){ 
    res.json({
        status: 'success', 
        todos
    }); 
}


function getSingleTodo(req, res) { 
    const { id } = req.params;
    const todo = todos.find(todo => todo.id === +id);

    res.json({
        status: 'success', 
        todo
    }); 
}


function updateTodo(req, res) {
    const { id } = req.params;
    const { task } = req.body; 

    const todo = todos.find(todo => todo.id === +id);
    todo.task = task; 

    return res.json({
        status:'success', 
        message: 'updated successfully'
    }) 
}


function deleteTodo(req, res) {
    const { id } = req.params;
    todos = todos.filter(function(todo) {
        if(todo.id !== +id) {
            return todo; 
        } 
    }) 

    return res.json({
        status:'success', 
        message: 'deleted successfully'
    })
}


module.exports = {
    createTodo,
    getAllTodo,
    getSingleTodo,
    updateTodo,
    deleteTodo
}