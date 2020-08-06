import {
  renderTask,
} from './task';
import {
  cards,
  parentTaskCard,
  selectProjects,
} from './components';

const tasks = (project) => {
  const tasks = localStorage.getItem(project);


  if (tasks === null || tasks === '') {
    return [];
  }

  return JSON.parse(tasks);
};

const renderTasks = (arr) => {
  const projectName = document.getElementById('taskListTitle');
  projectName.innerHTML = `${selectProjects.value} tasks`;
  const size = cards.length;
  for (let i = 0; i < size; i += 1) {
    parentTaskCard.removeChild(cards[0]);
  }
  arr.forEach(x => {
    renderTask(x);
  });
};

export {
  tasks,
  renderTasks,
};