const storage = window.localStorage;
const TASK = "tasks";

function loadTasks() {
    // If you don't use JSON.parse(), this return a string object instead of a array object!
	return JSON.parse(storage.getItem(TASK));
}

function initTasks() {
	const tasks = loadTasks();

	if (tasks) {
		return tasks;
	} else {
        // Must use JSON.stringify() when you store a Array to localstorage of borwser!!
		storage.setItem(TASK, JSON.stringify(["Hello! Input a new Task!!"]));
		return JSON.parse(loadTasks());
	}
}

function inputNewTask(task) {
	const tasks = loadTasks().concat(task);
	storage.setItem("TASK", tasks);
}

export { initTasks, inputNewTask };
