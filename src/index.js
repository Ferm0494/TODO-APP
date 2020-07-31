import project from './js/project'

const createProject = () =>{
  const projectName = document.getElementById("projectNameField").value;
  const projects = project(projectName).addProject();
  //populateSelect(projects);
}

const populateSelect = (arr) =>{
  const selectProjects = document.getElementById('projects');
  arr.forEach(element => {
    const option = document.createElement('option');
    option.innerHTML = element;  
    selectProjects.appendChild(option);
  });
}

document.getElementById('createProject').addEventListener('click', function(e) {
  e.preventDefault();
  createProject();
});
