import {
    tasks,
    renderTasks,
} from './tasks';
import {
    taskCard,
    taskContainerList,
    parentTaskCard
} from './components';



const deleteTask = (task) => {
    let idProject = task.project
    let arr = tasks(idProject)

    let newArr = arr.filter(x =>
        x !== task
    )

    localStorage.setItem(idProject, JSON.stringify(newArr));
    renderTasks(newArr);
}

const createDeleteButton = (task) => {
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete task"
    deleteButton.id = task.title;
    deleteButton.addEventListener('click', function(e) {
        deleteTask(task)
    })
    return deleteButton
}

const renderTask = (task) => {

    if (taskContainerList.classList.contains('d-none')) {
        taskContainerList.classList.remove('d-none')
    }

    const card = taskCard.cloneNode(true);

    let children = card.children[0].children;
    children[0].innerHTML = task.title;
    children[1].innerHTML = `Description: ${task.description}`
    children[2].innerHTML = `Due Date : ${task.dueDate}`
    children[3].innerHTML = `Priority : ${task.priority}`
    children[4].innerHTML = `Notes : ${task.notes}`
    let deleteButton = createDeleteButton(task);
    card.appendChild(deleteButton);
    parentTaskCard.appendChild(card)

    card.classList.add("real-task")
    card.classList.remove('d-none');
}

const task = (inputs, project) => {

    let newTask = {
        project,
        title: inputs[0].value,
        description: inputs[1].value,
        dueDate: inputs[2].value,
        priority: inputs[3].value,
        notes: inputs[4].value,
    }

    const taskList = tasks(project);

    const validate = () => {
        const title = newTask.title.trim()
        let flag = true;
        taskList.forEach(element => {
            if (element.title === title) {
                inputs[0].setCustomValidity('Task already exists')
                inputs[0].reportValidity();
                flag = false;
            }
        });
        if (title === "") {

            inputs[0].setCustomValidity('Can\'t be empty');
            inputs[0].reportValidity();
            flag = false
        }
        return flag;
    }

    const addTask = () => {
        if (validate()) {
            taskList.push(newTask);
            localStorage.setItem(newTask.project, JSON.stringify(taskList));
            renderTask(newTask);
        }
    }

    addTask()
}


export {
    task,
    renderTask,
};