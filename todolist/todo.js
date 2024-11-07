// Getting the necessary elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Add Task Event
addBtn.addEventListener('click', function() {
    const taskText = taskInput.value;
    if (taskText !== "") {
        const newTask = createTask(taskText);
        taskList.appendChild(newTask);
        taskInput.value = ""; // clear input
    }
});

// Create a new task element
function createTask(taskText) {
    const taskItem = document.createElement('li');
    
    // Creating task content
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    // Create Edit Button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => editTask(taskContent, taskItem));

    // Create Delete Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(taskItem));

    // Create Complete Button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', () => completeTask(taskContent, taskItem));

    // Append buttons and content to task
    taskItem.appendChild(taskContent);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(deleteBtn);

    return taskItem;
}

// Edit task function
function editTask(taskContent, taskItem) {
    const newTaskText = prompt('Edit your task:', taskContent.textContent);
    if (newTaskText) {
        taskContent.textContent = newTaskText;
    }
}

// Delete task function
function deleteTask(taskItem) {
    taskItem.remove();
}

// Mark task as complete
function completeTask(taskContent, taskItem) {
    taskContent.classList.toggle('completed');
    const completeBtn = taskItem.querySelector('.complete-btn');
    if (completeBtn.textContent === 'Complete') {
        completeBtn.textContent = 'Undo';
    } else {
        completeBtn.textContent = 'Complete';
    }
}
