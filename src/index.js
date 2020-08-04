import project from './js/project'
import library from './js/libraries'
import task from './js/task'
import tasks from './js/tasks'
import {
  taskForm,
  deleteProjectBtn
} from './js/components'

const createProject = () => {

    const projectName = document.getElementById("projectNameField")
    project(projectName)
    populateSelect(library());
}


const validate = (arr) =>{
  if (arr.length >0 ){
    taskForm.classList.remove('d-none');
    deleteProjectBtn.classList.remove('d-none');
    return true;
  }else{
    taskForm.classList.add('d-none');
    deleteProjectBtn.classList.add('d-none');
    return false;
  }
}

const populateSelect = (arr) => {
  console.log(`This is arr ${arr}`)
  const selectProjects = document.getElementById('projects');

  if (validate(arr)){
      while (selectProjects.firstChild) {
          selectProjects.removeChild(selectProjects.firstChild);
      }
  
      arr.forEach(element => {
          const option = document.createElement('option');
          option.innerHTML = element;
          selectProjects.appendChild(option);
      });
    }
}



document.getElementById('createProject').addEventListener('click', function(a) {
  a.preventDefault();
  createProject();
});

document.getElementById('addTask').addEventListener('click', function(e){
  e.preventDefault();
  const inputs = document.getElementsByTagName('form')[2].getElementsByClassName('form2')
  const project = document.getElementById('projects').value

   task(inputs, project);
})



//localStorage.clear()
populateSelect(library())
