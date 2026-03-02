// Learn how to debug your code

// TODO: To-Do List App, you can add new task, or remove or delete existing tasks

const tasks = ["Task 1", "Task 2", "Task 3"]

// add tasks function
function addTask(task) {
    if (!task) throw new Error("Task cannot be empty");
    tasks.push(task)

    console.log("Task added:", task)
}

console.log("All tasks:", tasks)


// delete tasks function

function deleteTask(index) {
    if (index < 0 || index >= tasks.length) {
        throw new Error("Invalid task index");
    }

    tasks.splice(index, 1)

    console.log("Task deleted!")
}

try {
    addTask("Learn JavaScript")
    addTask("Practice Error Handling")
    deleteTask(2)
} catch (error) {
    console.error(error.message);
    
} finally{
    console.log("Current task:", tasks)
}