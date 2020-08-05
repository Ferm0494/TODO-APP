import {
    project,
    deleteProject
} from './js/project'
import library from './js/libraries'
import {
    taskForm,
    deleteProjectBtn,
    selectProjects
} from './js/components'
import {
    task
} from './js/task'
import {
    renderTasks,
    tasks
} from './js/tasks'
const createProject = () => {

    const projectName = document.getElementById("projectNameField")
    project(projectName)
    populateSelect(library());
}


const validate = (arr) => {
    if (arr.length > 0) {
        taskForm.classList.remove('d-none');
        deleteProjectBtn.classList.remove('d-none');
        return true;
    } else {
        if (selectProjects.hasChildNodes) {
            selectProjects.remove(selectProjects.firstChild);
        }
        console.log(`children: ${selectProjects.childElementCount}`);
        taskForm.classList.add('d-none');
        deleteProjectBtn.classList.add('d-none');
        return false;
    }
}

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
    }
}


document.getElementById('createProject').addEventListener('click', function(a) {
    a.preventDefault();
    createProject();
});

document.getElementById('addTask').addEventListener('click', function(e) {
    e.preventDefault();
    const inputs = document.getElementsByTagName('form')[2].getElementsByClassName('form2')
    const project = document.getElementById('projects').value

    task(inputs, project);
})

deleteProjectBtn.addEventListener('click', function(e) {
    e.preventDefault();
    populateSelect(deleteProject(selectProjects.value));
    renderTasks(tasks(selectProjects.value))

});

selectProjects.addEventListener('change', function(e) {
    let arr = tasks(selectProjects.value);
    console.log(JSON.stringify(arr));
    renderTasks(arr)
})



//localStorage.clear()
populateSelect(library())