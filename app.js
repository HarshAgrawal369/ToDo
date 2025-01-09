const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let tasks = []; // Array to store tasks

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files (CSS, JS, etc.)

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Home route
app.get('/', (req, res) => {
    res.render('index', { tasks: tasks });
});

// Add task
app.post('/add', (req, res) => {
    const task = req.body.task;
    if (task) tasks.push(task);
    res.redirect('/');
});

// Delete task
app.post('/delete', (req, res) => {
    const taskIndex = req.body.index;
    if (taskIndex >= 0 && taskIndex < tasks.length) tasks.splice(taskIndex, 1);
    res.redirect('/');
});

// Start the server
const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
