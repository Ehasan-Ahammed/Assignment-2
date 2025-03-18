const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
            <input type="checkbox" class="complete-checkbox">
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        // Save tasks to localStorage
        saveTasks();
    }
}

function deleteTask(event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
        saveTasks();
    }
}

function toggleComplete(event) {
    if (event.target.classList.contains("complete-checkbox")) {
        const taskItem = event.target.parentElement;
        taskItem.classList.toggle("completed");
        saveTasks();
    }
}

function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll("li").forEach(task => {
        tasks.push({
            text: task.querySelector("span").textContent,
            completed: task.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${task.text}</span>
            <button class="delete-btn">Delete</button>
            <input type="checkbox" class="complete-checkbox" ${task.completed ? "checked" : ""}>
        `;
        if (task.completed) {
            taskItem.classList.add("completed");
        }
        taskList.appendChild(taskItem);
    });
}

addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);
taskList.addEventListener("change", toggleComplete);

// Load tasks from localStorage on page load
window.onload = () => {
    getRandomFortune();
    loadTasks();
};