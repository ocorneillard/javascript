//  UI vars

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector('#task');

// Load event Listeners

loadEventListeners();

// Load event Listeners

function loadEventListeners() {

  form.addEventListener('submit', addTask);

}

// Add Task

function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  } else {

  // Create li
  const li = document.createElement('li');
  // add class
  li.className = 'collection-item';
  // Create txt node + append
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // add a class 
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fas fa-trash-alt"></i> ';
  li.appendChild(link);

  // append li to ul
  taskList.appendChild(li);

  taskInput.value= '';
  console.log(li);
}

  e.preventDefault();
}