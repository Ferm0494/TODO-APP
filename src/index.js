import project from './js/project'
import library from './js/libraries'
import task from './js/task'
import tasks from './js/tasks'

const createProject = () => {

    const projectName = document.getElementById("projectNameField")
    project(projectName)
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
  const inputs = document.getElementsByTagName('form')[2].getElementsByClassName('form2')
  const project = document.getElementById('projects').value
  let newTask = {
    project,
    title: inputs[0].value,
    description: inputs[1].value,
    dueDate: inputs[2].value,
    priority: inputs[3].value,
    notes: inputs[4].value,
  }
  console.log(`Task index ${JSON.stringify(newTask)}`);
   task(newTask);
})

    // localStorage.clear()
populateSelect(library())