import project from './js/project'
import library from './js/libraries'
import task from './js/task'
import tasks from './js/tasks'

const createProject = () => {

    const projectName = document.getElementById("projectNameField").value;
    const lib = project(projectName)
    populateSelect(library());
}

const populateSelect = (arr) => {
    console.log(`This is arr ${arr}`)
    const selectProjects = document.getElementById('projects');

    while (selectProjects.firstChild) {
        selectProjects.removeChild(selectProjects.firstChild);
    }

    arr.forEach(element => {
        const option = document.createElement('option');
        option.innerHTML = element;
        selectProjects.appendChild(option);
    });
}

document.getElementById('createProject').addEventListener('click', function(a) {
  a.preventDefault();
  createProject();
});

document.getElementById('addTask').addEventListener('click', function(e){
  e.preventDefault();
  const title = document.getElementById('title');
  const description = document.getElementById('description');
  const dueDate = document.getElementById('dueDate');
  const priority = document.getElementById('priority');
  const notes = document.getElementById('notes');
  const project = document.getElementById('projects').value
  task(title, description, dueDate, priority, notes, project);
})

 //localStorage.clear()
populateSelect(library())