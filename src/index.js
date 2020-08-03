import project from './js/project'
import library from './js/libraries'

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

// localStorage.clear()
populateSelect(library())