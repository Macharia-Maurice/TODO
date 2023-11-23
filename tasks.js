document.addEventListener('DOMContentLoaded', () => {
	// Getting HTML elements
	const submit = document.querySelector('#submit');
	const newTask = document.querySelector('#task');
	const tasksUl = document.querySelector('#tasks');

	// Disabling submit button by default
	submit.disabled = true;

	// Listening for input
	newTask.addEventListener('input', () => {
		// Toggling submit
		if (newTask.value.length > 3) {
			submit.disabled = false;
		} else {
			submit.disabled = true;
		}
	});

	// On form submission
	document.addEventListener('submit', (e) => {
		// Preventing page reloading
		e.preventDefault();
		// Creating new li for task
		const newTaskLi = document.createElement('li');
		newTaskLi.innerText = newTask.value;
		tasksUl.prepend(newTaskLi);

		// Resetting input
		newTask.value = '';
	});
});
