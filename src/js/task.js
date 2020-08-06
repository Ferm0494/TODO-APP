/* eslint-disable import/no-cycle */

import {
  tasks,
  renderTasks,
} from './tasks';
import {
  taskCard,
  taskContainerList,
  parentTaskCard,
} from './components';


const editTask = (input, task) => {
  const listOfTasks = tasks(task.project);
  const index = listOfTasks.findIndex(t => t.title === task.title);


  task.description = input[0].value;
  task.dueDate = input[1].value;
  task.priority = input[2].value;
  task.notes = input[3].value;

  listOfTasks[index] = task;
  localStorage.setItem(task.project, JSON.stringify(listOfTasks));
};

const deleteTask = (task) => {
  const idProject = task.project;
  const arr = tasks(idProject);

  const newArr = arr.filter(x => x.title !== task.title);

  localStorage.setItem(idProject, JSON.stringify(newArr));
  renderTasks(newArr);
};

const createDeleteButton = (task) => {
  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'Delete task';
  deleteButton.id = task.title;
  deleteButton.addEventListener('click', () => {
    deleteTask(task);
  });
  return deleteButton;
};

const renderTask = (task) => {
  if (taskContainerList.classList.contains('d-none')) {
    taskContainerList.classList.remove('d-none');
  }

  const card = taskCard.cloneNode(true);
  const taskTitle = card.children[0].children[0];
  taskTitle.addEventListener('click', (e) => {
    e.preventDefault();
    const form = card.children[0].children[1];
    if (form.classList.contains('d-none')) {
      form.classList.remove('d-none');
    } else {
      form.classList.add('d-none');
    }
  });
  switch (parseInt(task.priority, 10)) {
    case 1:
      card.classList.add('bg-danger');
      break;
    case 2:
      card.classList.add('bg-warning');
      break;
    default:
      card.classList.add('bg-info');
  }

  const deleteButton = createDeleteButton(task);
  card.appendChild(deleteButton);
  parentTaskCard.appendChild(card);
  const { children } = card.children[0];
  const form = children[1].getElementsByClassName('form3');
  children[0].innerHTML = task.title;
  form[0].innerHTML = task.description;
  form[1].value = task.dueDate;
  form[2].value = parseInt(task.priority, 10);
  form[3].innerHTML = task.notes;


  form[4].addEventListener('click', (e) => {
    e.preventDefault();
    editTask(form, task);
  });
  card.classList.add('real-task');
  card.classList.remove('d-none');
};

const task = (inputs, project) => {
  const newTask = {
    project,
    title: inputs[0].value,
    description: inputs[1].value,
    dueDate: inputs[2].value,
    priority: inputs[3].value,
    notes: inputs[4].value,
  };

  const taskList = tasks(project);

  const validate = () => {
    const title = newTask.title.trim();
    let flag = true;
    taskList.forEach(element => {
      if (element.title === title) {
        inputs[0].setCustomValidity('Task already exists');
        inputs[0].reportValidity();
        flag = false;
      }
    });
    if (title === '') {
      inputs[0].setCustomValidity('Can\'t be empty');
      inputs[0].reportValidity();
      flag = false;
    }
    return flag;
  };

  const addTask = () => {
    if (validate()) {
      taskList.push(newTask);
      localStorage.setItem(newTask.project, JSON.stringify(taskList));
      renderTask(newTask);
    }
  };

  addTask();
};


export {
  task,
  renderTask,
};