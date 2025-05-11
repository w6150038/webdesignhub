let taskInput = document.getElementById('taskInput');
let addBtn = document.getElementById('addBtn');
let taskList = document.getElementById('taskList');
let clearAllBtn = document.getElementById('clearAllBtn');
let storedTasks = localStorage.getItem('tasks');
if (storedTasks) {
    taskList.innerHTML = storedTasks;
    let loadedDeleteButtons = taskList.querySelectorAll(".delete-btn");
    loadedDeleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.parentNode.remove();
            localStorage.setItem('tasks', taskList.innerHTML);
        });
    });
    let loadedCheckboxes = taskList.querySelectorAll('.form-check-input');
    loadedCheckboxes.forEach(checkbox => {
        let taskSpan = checkbox.nextElementSibling.querySelector('span');
        if (checkbox.checked) {
            taskSpan.classList.add('text-decoration-line-through', 'text-muted');
        } else {
            taskSpan.classList.remove('text-decoration-line-through', 'text-muted');
        }
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                taskSpan.classList.add('text-decoration-line-through', 'text-muted');
            } else {
                taskSpan.classList.remove('text-decoration-line-through', 'text-muted');
            }
            localStorage.setItem('tasks', taskList.innerHTML);
        });
    });
}
addBtn.addEventListener('click', function() {
    let taskText = taskInput.value.trim();
    if (taskText !== "") {
        let listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        listItem.innerHTML = `
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="task-${Date.now()}">
                <label class="form-check-label" for=task-${Date.now()}>
                    <span>${taskText}</span>
                </label>
            </div>
            <button class="btn btn-outline-danger btn-sm delete-btn">刪除</button>
        `;
        taskList.appendChild(listItem);
        localStorage.setItem('tasks', taskList.innerHTML);
        let checkbox = listItem.querySelector('.form-check-input');
        let taskSpan = listItem.querySelector('.form-check-label span');
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                taskSpan.classList.add('text-decoration-line-through', 'text-muted');
            } else {
                taskSpan.classList.remove('text-decoration-line-through', 'text-muted');
            }
        });
        taskInput.value = '';
        let deleteBtn = listItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', function() {
            listItem.remove();
            localStorage.setItem('tasks', taskList.innerHTML);
        });
    }
});
clearAllBtn.addEventListener('click', function() {
    taskList.innerHTML = '';
    localStorage.removeItem('tasks');
});