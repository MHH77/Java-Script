// Define variables
let tasks = [];

// Class for defining tasks
class Task {
    constructor(title, completed = false) {
        this.title = title;
        this.completed = completed;
    }

    toggleStatus() {
        this.completed = !this.completed;
    }
}

// Function to add a new task
function addTask(title) {
    if (!title) {
        console.log("Task title cannot be empty.");
        return;
    }
    tasks.push(new Task(title));
    console.log(`Task '${title}' added.`);
}

// Function to display task list
function showTasks() {
    console.log("Task List:");
    tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.title} - ${task.completed ? "✅ Completed" : "❌ Not Completed"}`);
    });
}

// Function to remove a task from the list
function removeTask(index) {
    if (index < 0 || index >= tasks.length) {
        console.log("Invalid index!");
        return;
    }
    let removedTask = tasks.splice(index, 1);
    console.log(`Task '${removedTask[0].title}' removed.`);
}

// Function to toggle the completion status of a task
function toggleTaskStatus(index) {
    if (index < 0 || index >= tasks.length) {
        console.log("Invalid index!");
        return;
    }
    tasks[index].toggleStatus();
    console.log(`Task '${tasks[index].title}' status changed.`);
}

// Execute some functions for testing
addTask("Study JavaScript");
addTask("Practice project");
showTasks();
toggleTaskStatus(0);
showTasks();
removeTask(1);
showTasks();
