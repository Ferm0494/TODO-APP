import {
  project,
  deleteProject,
} from './js/project';
import library from './js/libraries';
import {
  taskForm,
  deleteProjectBtn,
  selectProjects,
} from './js/components';
import {
  task,
} from './js/task';
import {
  renderTasks,
  tasks,
} from './js/tasks';

const validate = (arr) => {
  if (arr.length > 0) {
    taskForm.classList.remove('d-none');
    deleteProjectBtn.classList.remove('d-none');
    return true;
  }
  if (selectProjects.hasChildNodes) {
    selectProjects.remove(selectProjects.firstChild);
  }
  taskForm.classList.add('d-none');
  deleteProjectBtn.classList.add('d-none');
  return false;
};

const populateSelect = (arr) => {
  if (validate(arr)) {
    while (selectProjects.firstChild) {
      selectProjects.removeChild(selectProjects.firstChild);
    }
    arr.forEach(element => {
      const option = document.createElement('option');
      option.innerHTML = element;
      selectProjects.appendChild(option);
    });
    renderTasks(tasks(selectProjects.value));
  }
};

const createProject = () => {
  const projectName = document.getElementById('projectNameField');
  project(projectName);
  populateSelect(library());
};


document.getElementById('createProject').addEventListener('click', (a) => {
  a.preventDefault();
  createProject();
});

document.getElementById('addTask').addEventListener('click', (e) => {
  e.preventDefault();
  const inputs = document.getElementsByTagName('form')[2].getElementsByClassName('form2');
  const project = document.getElementById('projects').value;

  task(inputs, project);
});

deleteProjectBtn.addEventListener('click', (e) => {
  e.preventDefault();
  populateSelect(deleteProject(selectProjects.value));
  renderTasks(tasks(selectProjects.value));
});

selectProjects.addEventListener('change', () => {
  const arr = tasks(selectProjects.value);
  renderTasks(arr);
});

// localStorage.clear()
populateSelect(library());