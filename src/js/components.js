const taskForm = document.getElementsByTagName('form')[2]; 
const deleteProjectBtn = document.getElementById('deleteProjectBtn');
const selectProjects = document.getElementById('projects');
const cards = document.getElementsByClassName('real-task')
const taskCard = document.getElementsByTagName('li')[0]
const parentTaskCard = taskCard.parentNode
const taskContainerList = document.getElementsByClassName('col-6')[1]
export {
  parentTaskCard,
  cards,
  taskContainerList,
  taskCard,
  taskForm,
  deleteProjectBtn,
  selectProjects
}