const Storage = window.localStorage;
const TASK = 'tasks';


function loadTasks() {
    return Storage.getItem(TASK);
}

function init() {
    const tasks = loadTasks();
    if (tasks) {
        return tasks
    }

    Storage.setItem("tasks", []);

}