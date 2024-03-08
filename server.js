const express = require('express');
const todoRouter = require('./todos/todoRoute');

const app = express();
app.use(express.json());

app.use('/api/todo', todoRouter);

app.listen(8080, function() {
    console.log('Server is running on port 8080');
})

