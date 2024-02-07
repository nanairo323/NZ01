// <!-- Instructions:
// Create a Task Manager using Javascript (Here's the code base for HTML *wink*)
// 1. Access the elements needed from HTML
// 2. Add an event listener for form submission
// 3. Create a function to add a Task.
//   When the user enters a task in the input field and clicks the "Add" button, 
//   the task should be added to the list of tasks displayed on the webpage.
//    Hint: The event listener call the function to add a Task
// 4. Display task: Each task should be displayed as a list item (<li>) inside an unordered list (<ul>).
// 5. Removing Tasks: Include a "Remove" button next to each task. When the "Remove" button is clicked, 
// the corresponding task should be removed from the list. -->

//1
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

//2
taskForm.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    addListItem();
}

const button = document.getElementById('submit');
button.addEventListener('click',addListItem);

function addListItem() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
 
    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', function () {
        listItem.remove(); 
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    }
}
