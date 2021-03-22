const storage = window.localStorage;
const TASK = "tasks";
const defaultTask = ["Hello! Input a new Task!!"];
function loadTasks() {
    // If you don't use JSON.parse(), this return a string object instead of a array object!
	const loadedTasks = JSON.parse(storage.getItem(TASK)) || null ;

	return loadedTasks;
}
/**
 * 출력할 task를 위한 Local Storage의 초기 설정 함수이다.
 * @returns Local Storage에 저장된 Array나 Default Array가 반환된다.
 */
function initTasks() {
	const tasks = loadTasks();

	if (tasks) {
		console.log("Exist!!");
		console.log(tasks);
		return tasks;
	} else {
		console.log(tasks);
        // Must use JSON.stringify() when you store a Array to localstorage of borwser!!
		storage.setItem(TASK, JSON.stringify(defaultTask));
		return defaultTask;
	}
}

/**
 * Add a task to Local Storage
 * @param {string} task task's name to add to local storage
 */
function inputNewTask(task) {
	const tasks = loadTasks().concat(task);
	storage.setItem(TASK, JSON.stringify(tasks));
}
function deleteTask(targetTask) {
	const result = loadTasks().filter(task => task !== targetTask);
	storage.setItem(TASK, JSON.stringify(result));
}

export { initTasks, inputNewTask, loadTasks, deleteTask };
