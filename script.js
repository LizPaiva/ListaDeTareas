document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

   
    function createTaskItem(taskText) {
        const li = document.createElement('li');

        const span = document.createElement('span');
        span.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.classList.add('remove');

        removeButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });

        li.appendChild(span);
        li.appendChild(removeButton);

        li.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        return li;
    }

   
    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText) {
            const taskItem = createTaskItem(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

   
    addTaskButton.addEventListener('click', addTask);

   
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});