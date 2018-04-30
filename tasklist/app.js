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

  document.addEventListener('DOMContentLoaded', getTasks);

  form.addEventListener('submit', addTask);

  taskList.addEventListener('click', removeTask);

  clearBtn.addEventListener('click', clearTask);

  filter.addEventListener('keyup', filterTask);
}

// Get tasks from LS

function getTasks() {
  let tasks ;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  
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

  // store it
  storeTaskInLocaleStorage(taskInput.value);

  taskInput.value= '';
  console.log(li);
}

  e.preventDefault();
}

function storeTaskInLocaleStorage(e) {
  let tasks ;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTask(e) {
  // target delete item

  if (e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure ?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function clearTask(e) {
  
  // taskList.innerHTML = ' '; <-- MOYEN RAPIDE QU'UN WHILE
  // Json perf . com

  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
}

function filterTask(e) {
  const text = e.target.value.toLowerCase() ; 
  document.querySelectorAll(".collection-item").forEach(
    function(task) {
      const item = task.firstChild.textContent;
      if(item.toLowerCase().indexOf(text) != -1) {
        task.style.display = 'block';
      } else {
        task.style.display = 'none';
      }
    }
  );

}