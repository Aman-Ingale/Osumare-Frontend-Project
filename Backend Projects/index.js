const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const fs = require("fs")



// Importing task data from local JSON file
const tasks = require("./MOCK_DATA.json")

// Middleware to parse URL-encoded form data and json bodies
app.use(express.urlencoded({ extended: false }))
app.use(express.json()); 
/** 
* Validation function
* Returns false if any of the field is undefined
*/
function validateTask(data) {
    if (!data.task_name || !data.due_date || !data.priority) {
        return false;
    }
    return true;
}
//RestAPI Routes
/**
 * Route: /tasks/:id
 * Description: Perform GET and POST operations
 */
app.route("/tasks")
    /**
     * Method: GET
     * Description: Fetches all the tasks from MOCK_DATA.json
     */
    .get((req, res) => {
        return res.status(200).json(tasks);
    })
    /**
     * Method: POST
     * Description: Create a new task and save to MOCK_DATA.json
     */
    .post((req, res) => {
        try {
            const body = req.body;
            if (!validateTask(body)) return res.status(400).json({ error: 'Data is Invalid' });
            const task = { id: tasks.length + 1, ...body };
            tasks.push(task)
            fs.writeFile('./MOCK_DATA.json', JSON.stringify(tasks), (err, data) => {
                if (err) return res.status(500).json({ error: 'Failed to create task.' });
                return res.status(201).json({ message: "Task Created",data:task});
            })
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    })
/**
 * Route: /tasks/:id
 * Description: Perform GET, PUT, DELETE operations on a single task by ID
 */

app.route("/tasks/:id")
    /**
     * Method : GET
     * Description : Get a single task by ID
     */
    .get((req, res) => {
        const { id } = req.params
        const index = tasks.findIndex(task => task.id == id);
        if (index == -1) {
            return res.status(404).json({ error: 'Task not found.' });
        } return res.status(200).json(tasks[index])
    })
    /**
     * Method : PUT
     * Description : Update a single task by ID
     */
    .put((req, res) => {
        try {
            const { id } = req.params;
            const { task_name, due_date, priority, completed } = req.body;
            const index = tasks.findIndex(task => task.id == id);
            if (index == -1) {
                return res.status(404).json({ error: 'Task not found.' });
            }
            if (task_name != undefined) tasks[index].task_name = task_name;
            if (due_date != undefined) tasks[index].due_date = due_date;
            if (priority != undefined) tasks[index].priority = priority;
            if (completed != undefined) tasks[index].completed = completed;
            console.log(tasks[index])
            fs.writeFile('./MOCK_DATA.json', JSON.stringify(tasks), (err, data) => {
                if (err) return res.status(500).json({ error: 'Failed to update task.' });
                return res.status(200).json({ message: "Task Updated" ,data:tasks[index]})
            })
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    })
    /**
     * Method: DELETE
     * Description: Delete a task by ID
     */
    .delete((req, res) => {
        try {
            const { id } = req.params;
            const index = tasks.findIndex(task => task.id == id);
            if (index == -1) {
                return res.status(404).json({ error: 'Task not found.' });
            }
            const task = tasks[index]
            tasks.splice(index, 1);
            fs.writeFile('./MOCK_DATA.json', JSON.stringify(tasks), (err, data) => {
                if (err) return res.status(500).json({ error: 'Failed to delete task.' });
                return res.json({ message: "Task Deleted",data:task})
            })
        } catch (error) {
            return res.status(500).json({ error: error });
        }
    })
//Start the server
app.listen(PORT, () => {
    console.log("Listening on " + PORT)
})